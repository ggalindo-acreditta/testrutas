INSERT INTO public.xfm_sgd_usuario 
(id,
 login,
 documento,
 nombres,
 apellidos,
 nacionalidad,
 forzar_cambio_clave,
 bloqueado,
 condicionuso_aceptada,
 bloqueo_en_acceso_fallido) 
 select uuid_generate_v5(uuid_ns_url(),'generic@utest.com'),
				   'genericuser',
				  '123456789',
				  'Generic',
				  'User',
				  'V',
				  0,
				  0,
				  0,
				  0 where not exists (
  select 1 from public.xfm_sgd_usuario as x where x.id = uuid_generate_v5(uuid_ns_url(),'generic@utest.com'))


