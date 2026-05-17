-- Step 2: secure Supabase Storage bucket "case-attachments" with RLS.
-- Run this after 001_case_access_token_rls.sql

begin;

alter table if exists storage.objects enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'storage_objects_admin_all_case_attachments'
  ) then
    create policy storage_objects_admin_all_case_attachments
      on storage.objects
      for all
      using (
        bucket_id = 'case-attachments'
        and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
      )
      with check (
        bucket_id = 'case-attachments'
        and coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
      );
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'storage_objects_select_by_case_token'
  ) then
    create policy storage_objects_select_by_case_token
      on storage.objects
      for select
      using (
        bucket_id = 'case-attachments'
        and exists (
          select 1
          from public.cases c
          where c.id::text = (storage.foldername(name))[1]
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
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'storage_objects_insert_by_case_token'
  ) then
    create policy storage_objects_insert_by_case_token
      on storage.objects
      for insert
      with check (
        bucket_id = 'case-attachments'
        and exists (
          select 1
          from public.cases c
          where c.id::text = (storage.foldername(name))[1]
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
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'storage_objects_delete_by_case_token'
  ) then
    create policy storage_objects_delete_by_case_token
      on storage.objects
      for delete
      using (
        bucket_id = 'case-attachments'
        and exists (
          select 1
          from public.cases c
          where c.id::text = (storage.foldername(name))[1]
            and c.access_token = coalesce(
              (current_setting('request.headers', true)::jsonb ->> 'x-case-token'),
              ''
            )
        )
      );
  end if;
end $$;

commit;
