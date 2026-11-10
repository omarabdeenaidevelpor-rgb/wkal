-- Waraq & Hekaya — Supabase schema and RLS policies
-- Apply this in the Supabase SQL editor.

create extension if not exists "pgcrypto";

-- Leads (contact form + future lead capture)
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'contact',
  name text not null,
  email text not null,
  message text,
  service text,
  budget text,
  deadline date,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Quote requests
create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service text not null,
  budget text not null,
  deadline date,
  description text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Future admin entities (prepared, not exposed publicly)
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  company text,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete set null,
  title text not null,
  status text not null default 'planned',
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  title text not null,
  done boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor text,
  action text not null,
  entity text,
  entity_id uuid,
  created_at timestamptz not null default now()
);

-- RLS: enable on all tables
alter table public.leads enable row level security;
alter table public.quotes enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.tasks enable row level security;
alter table public.activity_logs enable row level security;

-- Public can only INSERT leads/quotes (server-side validation gates this).
-- The service-role key bypasses RLS for admin reads/writes.
create policy "public can insert leads" on public.leads
  for insert to anon with check (true);

create policy "public can insert quotes" on public.quotes
  for insert to anon with check (true);

-- No public select/update/delete policies: leads/quotes are only readable
-- by authenticated admins (via service role or future admin auth).
