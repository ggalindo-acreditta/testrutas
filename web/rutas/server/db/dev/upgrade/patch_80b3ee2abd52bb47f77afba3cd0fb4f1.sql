-- FUNCTION: public.uf_user_invite(character varying, character varying, character varying, character varying, integer)
-- DROP FUNCTION public.uf_user_invite(character varying, character varying, character varying, character varying, integer);
CREATE OR REPLACE FUNCTION public.uf_user_invite(
	prm_email character varying,
	prm_name character varying,
	prm_lastname character varying,
	prm_registration_code character varying,
	prm_usuario integer)
    RETURNS TABLE(userid integer, email character varying, error character varying, token character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
AS $BODY$

DECLARE
	var_id integer;
	var_token varchar;
	var_error varchar(5);
	var_email varchar(50);
	var_organization integer;
BEGIN
	-- ERRORES
	-- AC001: Usuario ya esta registrado
	-- AC010: Email no existe en las solicitudes
    -- AC014: Usuario no Registrado
    -- AC015: El Usuario no esta conectado a ninguna Organizacion
	var_token := '';
	select users.email into var_email  
      from users 
     where users.email = lower(prm_email);
	if var_email is not null then
		var_email := '';
		var_error := 'AC001';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
	end if;
    
	select id, coalesce(organization_id,0) into var_id, var_organization 
      from public.users 
     where id = prm_usuario;
	if var_id is null then
		var_error := 'AC014';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
	if var_organization = 0 then
		var_error := 'AC015';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
    
    INSERT INTO public.users(id, firstname, lastname, password, email, type, status, organization_id, terms_accepted, registration_code)
    SELECT coalesce((select max(id) from public.users),0)+1, prm_name, prm_lastname, '', prm_email, 'COLLABORATOR', 'INVITED', var_organization, true, prm_registration_code;
    
    SELECT id into var_id
      FROM public.users as x
     WHERE lower(x.email) = lower(prm_email);
     
    IF var_id is null THEN
		var_error := 'AC001';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
    END IF;
        
	var_error := '';
	return query SELECT var_id as userid, prm_email as email, var_error as error, var_token as token;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_user_invite(character varying, character varying, character varying, character varying, integer)
    OWNER TO postgres;

-- FUNCTION: public.uf_user_confirm_invite(character varying, character varying, character varying, character varying)
-- DROP FUNCTION public.uf_user_confirm_invite(character varying, character varying, character varying, character varying);
CREATE OR REPLACE FUNCTION public.uf_user_confirm_invite(
	prm_registration_code character varying,
	prm_password character varying,
	prm_firstname character varying,
	prm_lastname character varying)
    RETURNS TABLE(email character varying, userid integer, firstname character varying, lastname character varying, password character varying, error character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
AS $BODY$

DECLARE
	var_user integer;
	var_email varchar(50);
	var_data_auth users%ROWTYPE;
	var_error varchar(5);
	var_password varchar;
    var_null varchar;
BEGIN
	-- ERRORES:
	-- U0001: Usuario no encontrado
	var_null := '';
	var_error := '';
 
	select * into var_data_auth 
      from public.users as u 
     where u.registration_code = prm_registration_code;
	if not found then
		var_email := '';
		var_user := null;
		var_error := 'U0001';
		var_password := '';
		return query select var_email as email, 0 as userid, var_null as firstname, var_null as lastname, var_null as password, var_error as error;
		return;
    else 
    	if var_data_auth.status = 'ACTIVE' then
            var_email := '';
            var_user := null;
            var_error := 'U0012';
            var_password := '';
            return query select var_null as email, 0 as userid, var_null as firstname, var_null as lastname, var_null as password, var_error as error;
            return;
        else
            var_error := '';
            var_user := var_data_auth.id;
            var_email := var_data_auth.email;
            var_password := var_data_auth.password;
            
            UPDATE public.users
               SET status = 'ACTIVE',
                   firstname = prm_firstname, 
                   lastname = prm_lastname, 
                   password = prm_password
             WHERE id = var_data_auth.id;
            return query select var_email as email, var_user as userid, prm_firstname, prm_lastname, prm_password as password, var_error as error;
            return;
    	end if;
	end if;
END
$BODY$;
ALTER FUNCTION public.uf_user_confirm_invite(character varying, character varying, character varying, character varying)
    OWNER TO postgres;

-- FUNCTION: public.uf_registrar_elemento(character varying, character varying, character varying, character varying, integer, character varying, character varying, character varying, character varying, materiality, integer, character varying, date, character varying, character varying, level, integer)
-- DROP FUNCTION public.uf_registrar_elemento(character varying, character varying, character varying, character varying, integer, character varying, character varying, character varying, character varying, materiality, integer, character varying, date, character varying, character varying, level, integer);
CREATE OR REPLACE FUNCTION public.uf_registrar_elemento(
	prm_name character varying,
	prm_issuer character varying,
	prm_issuer_url character varying,
	prm_category character varying,
	prm_duration integer,
	prm_description character varying,
	prm_skills character varying,
	prm_tags character varying,
	prm_criterion character varying,
	prm_materiality materiality,
	prm_score integer,
	prm_image_url character varying,
	prm_expire_at date,
	prm_language character varying,
	prm_badge_id character varying,
	prm_level level,
	prm_usuario integer)
    RETURNS TABLE(register_id integer, error character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	var_id integer;
	var_error varchar(5);
	var_organization integer;
BEGIN
	-- ERRORES
	-- E0001: Usuario no encontrado
	-- E0002: El usuario no esta conectado a ninguna Organizacion
    -- E0003: Elemento no encontrado
    
	select id, coalesce(organization_id,0) into var_id,  var_organization 
      from public.users 
     where id = prm_usuario and type = cast('LEADER' as user_type);
	if var_id is null then
		var_error := 'E0001';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
	if var_organization = 0 then
		var_error := 'E0002';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
    
    SELECT coalesce(max(id),0)+1 into var_id
      FROM public.elements;
    
    INSERT INTO public.elements(id, name, issuer, issuer_url, category, duration, description, skills, tags, criterion, 
                                  materiality, score, image_url, created_at, updated_at, expire_at, language, badge_id, organization_id, level)
	SELECT var_id, prm_name, prm_issuer, prm_issuer_url, prm_category, prm_duration, prm_description, prm_skills, prm_tags, prm_criterion, 
                                  prm_materiality, prm_score, prm_image_url, now(), now(), prm_expire_at, prm_language, prm_badge_id, organization_id, prm_level
      FROM public.users
     WHERE id = prm_usuario;    
        
	var_error := '';
	return query SELECT var_id as register_id, var_error as error;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_registrar_elemento(character varying, character varying, character varying, character varying, integer, character varying, character varying, character varying, character varying, materiality, integer, character varying, date, character varying, character varying, level, integer)
    OWNER TO postgres;

-- FUNCTION: public.uf_actualizar_elemento(integer, character varying, character varying, character varying, character varying, integer, character varying, character varying, character varying, character varying, materiality, integer, character varying, date, character varying, character varying, level, integer)
-- DROP FUNCTION public.uf_actualizar_elemento(integer, character varying, character varying, character varying, character varying, integer, character varying, character varying, character varying, character varying, materiality, integer, character varying, date, character varying, character varying, level, integer);
CREATE OR REPLACE FUNCTION public.uf_actualizar_elemento(
	prm_id integer,
	prm_name character varying,
	prm_issuer character varying,
	prm_issuer_url character varying,
	prm_category character varying,
	prm_duration integer,
	prm_description character varying,
	prm_skills character varying,
	prm_tags character varying,
	prm_criterion character varying,
	prm_materiality materiality,
	prm_score integer,
	prm_image_url character varying,
	prm_expire_at date,
	prm_language character varying,
	prm_badge_id character varying,
	prm_level level,
	prm_usuario integer)
    RETURNS TABLE(register_id integer, error character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	var_id integer;
	var_error varchar(5);
	var_organization integer;
BEGIN
	-- ERRORES
	-- E0001: Usuario no encontrado
	-- E0002: El usuario no esta conectado a ninguna Organizacion
    -- E0003: Elemento no encontrado
    
	select id, coalesce(organization_id,0) into var_id,  var_organization 
      from public.users 
     where id = prm_usuario and type = cast('LEADER' as user_type);
	if var_id is null then
		var_error := 'E0001';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
	if var_organization = 0 then
		var_error := 'E0002';
		return query select 0 as register_id, var_error as error;
		return;
	end if;    
    
	select id into var_id 
      from public.elements
     where id = prm_id;
	if var_id is null then
		var_error := 'E0003';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
    
    UPDATE public.elements
       SET name= prm_name, 
            issuer= prm_issuer, 
            issuer_url= prm_issuer_url, 
            category= prm_category, 
            duration= prm_duration, 
            description= prm_description, 
            skills= prm_skills, 
            tags= prm_tags, 
            criterion= prm_criterion,
            materiality= prm_materiality, 
            score= prm_score, 
            image_url= prm_image_url, 
            updated_at= now(), 
            expire_at= prm_expire_at, 
            language= prm_language, 
            badge_id= prm_badge_id,
            level= prm_level
     WHERE id = prm_id;    
        
	var_error := '';
	return query SELECT prm_id as register_id, var_error as error;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_actualizar_elemento(integer, character varying, character varying, character varying, character varying, integer, character varying, character varying, character varying, character varying, materiality, integer, character varying, date, character varying, character varying, level, integer)
    OWNER TO postgres;

-- FUNCTION: public.uf_eliminar_elemento(integer, integer)
-- DROP FUNCTION public.uf_eliminar_elemento(integer, integer);
CREATE OR REPLACE FUNCTION public.uf_eliminar_elemento(
	prm_id integer,
	prm_usuario integer)
    RETURNS TABLE(register_id integer, error character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
AS $BODY$

DECLARE
	var_id integer;
	var_tree_id integer;
	var_error varchar(5);
	var_organization integer;
    
    j integer;
    k integer;
BEGIN
	-- ERRORES
	-- E0001: Usuario no encontrado
	-- E0002: El usuario no esta conectado a ninguna Organizacion
    -- E0003: Elemento no encontrado
    -- E0007: El elemento seleccionado esta asociado a una Ruta
    
	select id, coalesce(organization_id,0) into var_id,  var_organization 
      from public.users 
     where id = prm_usuario and type = cast('LEADER' as user_type);
	if var_id is null then
		var_error := 'E0001';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
	if var_organization = 0 then
		var_error := 'E0002';
		return query select 0 as register_id, var_error as error;
		return;
	end if;      
    
	select id into var_id 
      from public.elements
     where id = prm_id and organization_id = var_organization;
	if var_id is null then
		var_error := 'E0003';
		return query select 0 as register_id, var_error as error;
		return;
	end if; 
    
	select id into var_id
      from public.element_tree 
     where element_id = prm_id limit 1;
    if var_id is not null then
		var_error := 'E0007';
		return query select 0 as register_id, var_error as error;
		return;
    end if;
     
	delete from elements where id = prm_id and organization_id = var_organization;
        
	var_error := '';
	return query SELECT var_id as register_id, var_error as error;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_eliminar_elemento(integer, integer)
    OWNER TO postgres;


