----------------------------------------------------------
----------------------------------------------------------
-- FUNCTION: public.uf_user_register(character varying, character varying, character varying, character varying, character varying)
-- DROP FUNCTION public.uf_user_register(character varying, character varying, character varying, character varying, character varying);
CREATE OR REPLACE FUNCTION public.uf_user_register(
	prm_email character varying,
	prm_password character varying,
	prm_name character varying,
	prm_lastname character varying,
	prm_registration_code character varying)
    RETURNS TABLE(userid integer, email character varying, error character varying, token character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	var_id integer;
	var_token varchar;
	var_error varchar(5);
	var_email varchar(50);
BEGIN
	-- ERRORES
	-- AC001: Usuario ya esta registrado
	-- AC010: Email no existe en las solicitudes
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
    
    INSERT INTO public.users(id, firstname, lastname, password, email, type, status, terms_accepted, registration_code)
    SELECT coalesce((select max(id) from public.users),0)+1, prm_name, prm_lastname, prm_password, lower(prm_email), 'LEADER', 'REGISTERED', true, prm_registration_code;
    
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
ALTER FUNCTION public.uf_user_register(character varying, character varying, character varying, character varying, character varying)
    OWNER TO postgres;

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
    SELECT coalesce((select max(id) from public.users),0)+1, prm_name, prm_lastname, '', lower(prm_email), 'COLLABORATOR', 'INVITED', var_organization, true, prm_registration_code;
    
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