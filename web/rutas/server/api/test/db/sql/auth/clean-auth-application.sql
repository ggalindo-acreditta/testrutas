delete from auth_application_scope
where auth_application = uuid_generate_v5(uuid_ns_url(),'test-coverage')
;

delete from auth_application
where auth_application = uuid_generate_v5(uuid_ns_url(),'test-coverage')
;
