import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
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

  const parsed = contactSchema.safeParse(body);
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
    const { error } = await supabase.from('leads').insert({
      type: 'contact',
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message
    });
    if (error) {
      console.error('Supabase insert failed:', error.message);
      return NextResponse.json({ message: 'Could not save your message. Please try again.' }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
