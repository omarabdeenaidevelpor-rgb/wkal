import { NextResponse } from 'next/server';
import { quoteSchema } from '@/lib/validation';
import { getSupabaseAdmin } from '@/lib/supabase';

const RATE_LIMIT_MS = 60_000;
const recentSubmissions = new Map<string, number>();

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const last = recentSubmissions.get(ip);
  if (last && now - last < RATE_LIMIT_MS) {
    return NextResponse.json({ message: 'Too many requests. Please wait a minute and try again.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please correct the highlighted fields.', errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  recentSubmissions.set(ip, now);

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from('quotes').insert({
      name: parsed.data.name,
      email: parsed.data.email,
      service: parsed.data.service,
      budget: parsed.data.budget,
      deadline: parsed.data.deadline || null,
      description: parsed.data.description
    });
    if (error) {
      console.error('Supabase insert failed:', error.message);
      return NextResponse.json({ message: 'Could not save your request. Please try again.' }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
