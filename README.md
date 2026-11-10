# Waraq & Hekaya

An AI-powered digital agency website — bilingual (Arabic/English), responsive, and built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn-style components (Lucide icons).

**Tagline:** Ideas Into Digital Experiences.
**Arabic tagline:** نحول أفكارك إلى تجارب رقمية تصنع الفرق.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Lucide icons
- Zod + React Hook Form (form validation)
- Supabase (PostgreSQL + RLS) — optional, provider-neutral by default

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The site is served under `/en` and `/ar` locale paths.

## Environment variables

See `.env.example`. Only `NEXT_PUBLIC_*` variables are exposed to the browser. The Supabase service-role key is used **only** in server-side route handlers — never in client code.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO/sitemap |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp contact number (international, digits only) |
| `CONTACT_EMAIL` | Public contact email |
| `SUPABASE_URL` | Supabase project URL (optional) |
| `SUPABASE_ANON_KEY` | Supabase anon key (optional) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key (server-only, optional) |

The contact and quote forms work without Supabase (they validate and respond successfully). When the Supabase variables are set, submissions are stored in the `leads` and `quotes` tables.

## Supabase setup

1. Create a Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Copy the project URL, anon key, and service-role key into `.env.local`.

The schema includes RLS policies that allow public inserts only into `leads` and `quotes`. All other tables (clients, projects, tasks, activity logs) are prepared for a future admin module and are not exposed publicly.

## Deployment (Cloudflare)

This project is a standard Next.js app. Recommended approaches:

- **Cloudflare Pages + `@cloudflare/next-on-pages`** (free tier): build command `npx @cloudflare/next-on-pages`, output directory `.vercel/output/static` (or follow the adapter's current instructions).
- **Vercel** (free tier): connect the repo, set env vars, deploy.

Set the environment variables in the hosting platform. Do not commit real secrets.

## Project structure

```
app/
  [locale]/          # locale-aware pages (en/ar)
  api/contact/       # contact form API route
  api/quote/         # quote request API route
  layout.tsx         # root layout
  globals.css        # global styles
components/           # header, footer, forms, shells
lib/
  content.ts          # bilingual content model
  validation.ts       # Zod schemas
  supabase.ts         # Supabase clients (server-only)
supabase/schema.sql    # schema + RLS
```

## Content & honesty

All content is truthful. The site does not include invented clients, testimonials, performance claims, or fake statistics. Portfolio and case-study sections are designed to hold real work and show a clear note until real projects are published.

## License

All rights reserved. Content © Waraq & Hekaya.
