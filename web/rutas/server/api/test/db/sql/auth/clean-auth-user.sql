delete from public.auth_user_preferences
where auth_user in (
  select x.auth_user from public.auth_user as x where x.email ilike '%@utest.com'
);

delete from public.auth_user_data
where auth_user in (
  select x.auth_user from public.auth_user as x where x.email ilike '%@utest.com'
);

delete from public.auth_user_role
where auth_user in (
  select x.auth_user from public.auth_user as x where x.email ilike '%@utest.com'
);

delete from public.auth_user
where auth_user in (
  select x.auth_user from public.auth_user as x where x.email ilike '%@utest.com'
);

delete from public.auth_user_register
where email ilike '%@utest.com'
