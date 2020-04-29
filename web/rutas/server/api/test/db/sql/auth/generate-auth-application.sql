insert into auth_application (auth_application, auth_plataform, name, description, secret)
select uuid_generate_v5(uuid_ns_url(),'test-coverage'), 4, 'test-coverage', 'Postman para pruebas', uuid_generate_v5(uuid_ns_url(),'test-coverage')
where not exists (
  select 1 from auth_application as x where x.auth_application = uuid_generate_v5(uuid_ns_url(),'test-coverage')
)
