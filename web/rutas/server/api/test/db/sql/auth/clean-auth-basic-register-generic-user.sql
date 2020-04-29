delete from public.auth_user_preferences
where auth_user = uuid_generate_v5(uuid_ns_url(),'basicregister@utest.com');

delete from public.auth_user_data
where auth_user = uuid_generate_v5(uuid_ns_url(),'basicregister@utest.com');

delete from public.auth_user_role
where auth_user = uuid_generate_v5(uuid_ns_url(),'basicregister@utest.com');

delete from public.auth_user
where auth_user = uuid_generate_v5(uuid_ns_url(),'basicregister@utest.com');

delete from public.auth_user_register
where email = 'basicregister@utest.com'
