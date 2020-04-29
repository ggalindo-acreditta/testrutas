INSERT INTO public.auth_user_register(
  auth_user_register, email, name, lastname, phone, verification_code,
  token, password, created_date)
select uuid_generate_v5(uuid_ns_url(),'basicregister@utest.com'), 'basicregister@utest.com', null, null, null, public.uf_util_random_string(5),
  public.uf_util_random_string(20), null, now()
where not exists (
  select 1 from public.auth_user_register as x where x.email = 'basicregister@utest.com'
)
