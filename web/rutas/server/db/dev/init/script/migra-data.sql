-- Migrar los usuarios de la tabla xfm_sgd_usuario a la tabla auth_user
INSERT INTO public.auth_user (auth_user,first_name, last_name, email, passwd, gen_language, gen_timezone, active) 
(SELECT	id,nombres first_name,apellidos last_name,coalesce(login || '@binwushis.com'), clave, 15, 221, case when activo=1 then true else false end from public.xfm_sgd_usuario);

-- Migrar los datos de los usuarios
INSERT INTO auth_user_data (auth_user,city, country, zipcode, phone,cell)
SELECT auser.auth_user,coalesce(ciudad.descripcion,'') ciudad,239 pais,'4000' zipcode,telf_fijo1,telf_movil1 
from public.xfm_sgd_usuario xusuario LEFT JOIN public.ciudad ON xusuario.dirhab_ciudad=public.ciudad.ciudad
JOIN public.auth_user auser ON xusuario.id=auser.auth_user;

-- Inserta los datos para el registro de usuario
INSERT INTO auth_user_register (email,name, lastname , phone , verification_code , token, created_date)
SELECT	coalesce(email,login) email,nombres first_name,apellidos last_name, telf_fijo1,'0000000000' code, '0' token, now() from public.xfm_sgd_usuario;

-- Crear nuevos roles
INSERT INTO auth_role (name,description) VALUES ('medico','medico'),('enfermera','enfermera'),('admin','admin');

-- Actualizar la clave
update public.auth_user set passwd='$2a$10$1RZyWIYAFitI0KJuheV1puWb64yYzxYL2TfXVEYPcF8my5wzbfkWe';
