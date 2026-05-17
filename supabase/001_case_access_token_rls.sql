-- Step 1: add per-case access token and RLS baseline.
-- Run this in Supabase SQL editor.

begin;

alter table if exists public.cases
  add column if not exists access_token text;

update public.cases
set access_token = md5(random()::text || clock_timestamp()::text || id::text)
where access_token is null;

alter table if exists public.cases
  alter column access_token set default md5(random()::text || clock_timestamp()::text),
  alter column access_token set not null;

create unique index if not exists cases_access_token_key on public.cases (access_token);

alter table if exists public.cases enable row level security;
alter table if exists public.case_attachments enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'cases' and policyname = 'cases_admin_all'
  ) then
    create policy cases_admin_all on public.cases
      for all
      using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin')
      with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin');
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'cases' and policyname = 'cases_insert_public'
  ) then
    -- Keep intake open for MVP (B2C without account login).
    create policy cases_insert_public on public.cases
      for insert
      with check (true);
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'cases' and policyname = 'cases_select_by_token'
  ) then
    create policy cases_select_by_token on public.cases
      for select
      using (
        access_token = coalesce(
          (current_setting('request.headers', true)::jsonb ->> 'x-case-token'),
          ''
        )
      );
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'cases' and policyname = 'cases_update_by_token'
  ) then
    create policy cases_update_by_token on public.cases
      for update
      using (
        access_token = coalesce(
          (current_setting('request.headers', true)::jsonb ->> 'x-case-token'),
          ''
        )
      )
      with check (
        access_token = coalesce(
          (current_setting('request.headers', true)::jsonb ->> 'x-case-token'),
          ''
        )
      );
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'case_attachments' and policyname = 'attachments_admin_all'
  ) then
    create policy attachments_admin_all on public.case_attachments
      for all
      using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin')
      with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin');
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'case_attachments' and policyname = 'attachments_select_by_case_token'
  ) then
    create policy attachments_select_by_case_token on public.case_attachments
      for select
      using (
        exists (
          select 1
          from public.cases c
          where c.id = case_attachments.case_id
            and c.access_token = coalesce(
              (current_setting('request.headers', true)::jsonb ->> 'x-case-token'),
              ''
            )
        )
      );
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'case_attachments' and policyname = 'attachments_insert_by_case_token'
  ) then
    create policy attachments_insert_by_case_token on public.case_attachments
      for insert
      with check (
        exists (
          select 1
          from public.cases c
          where c.id = case_attachments.case_id
            and c.access_token = coalesce(
              (current_setting('request.headers', true)::jsonb ->> 'x-case-token'),
              ''
            )
        )
      );
  end if;
end $$;

commit;
