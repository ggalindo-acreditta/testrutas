select auth_application, auth_plataform, name, description, secret
from auth_application
where auth_application = uuid_generate_v5(uuid_ns_url(),'test-coverage')
