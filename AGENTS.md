# AGENTS.md

## Project conventions

- Next.js App Router, TypeScript, Tailwind. Bilingual via `app/[locale]/` with `en`/`ar` locales. Root `layout.tsx` sets `lang`/`dir`; content lives in `lib/content.ts`.
- All copy is centralized in `lib/content.ts` — add new text there, not in components.
- Forms use React Hook Form + Zod (`lib/validation.ts`) and post to `app/api/contact` and `app/api/quote`. API routes validate server-side, rate-limit in memory, and use the Supabase service-role key (server-only) when configured.
- No fabricated clients, testimonials, or results. Portfolio/case-study sections intentionally show "coming soon" notes until real work is approved.
- `.env.example` is the only committed env file; secrets stay in `.env.local`/hosting env vars.
- Run: `npm run dev`. Build: `npm run build`. Deploy target: Cloudflare Pages (free tier) or Vercel.
