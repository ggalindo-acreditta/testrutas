INSERT INTO public.auth_user(auth_user,
first_name, last_name, email, passwd, gen_language,
gen_timezone, active, facebook_id, facebook_token, google_id,
google_token)
select uuid_generate_v5(uuid_ns_url(),'generic@utest.com'), 'Generic', 'User', 'generic@utest.com', '$2a$10$/w6FqmbP4T1RZ4lwRMuA5e83HXEf/jgPNWVTC1fZimg2m3DegBORe', (select gen_language from gen_language where code = 'en'),
(select gen_timezone from gen_timezone where name = 'America/Caracas'), true, null, null, null,
null
where not exists (
  select 1 from public.auth_user as x where x.auth_user = uuid_generate_v5(uuid_ns_url(),'generic@utest.com')
);

INSERT INTO public.auth_role(
	auth_role, name, description)
  select uuid_generate_v5(uuid_ns_url(),'generic@rtest.com'),'genericrole', 'Generic Role'
where not exists (
  select 1 from public.auth_role as x where x.auth_role = uuid_generate_v5(uuid_ns_url(),'generic@rtest.com')
);
	
INSERT INTO public.auth_user_role(
	auth_user, auth_role)
  select uuid_generate_v5(uuid_ns_url(),'generic@utest.com'),uuid_generate_v5(uuid_ns_url(),'generic@rtest.com')
where not exists (
  select 1 from public.auth_user_role as x where x.auth_user = uuid_generate_v5(uuid_ns_url(),'generic@utest.com') and  x.auth_role = uuid_generate_v5(uuid_ns_url(),'generic@rtest.com')
);
