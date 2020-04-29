DELETE FROM xfmsearch.ng_usuario 
WHERE pk in (
  select x.id from public.xfm_sgd_usuario as x where x.id = uuid_generate_v5(uuid_ns_url(),'generic@utest.com')
);

delete from public.xfm_sgd_usuario 
where login='genericuserid';