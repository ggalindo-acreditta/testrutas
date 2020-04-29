
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
AS $BODY$

DECLARE
	var_id integer;
	var_token varchar;
	var_error varchar(5);
	var_email varchar(50);
	var_organization integer;
	var_dominio1 varchar(50);
	var_dominio2 varchar(50);
BEGIN
	-- ERRORES
	-- AC001: Usuario ya esta registrado
	-- AC010: Email no existe en las solicitudes
	-- AC014: Usuario no Registrado
	-- AC015: El Usuario no esta conectado a ninguna Organizacion
	-- AC016: El Dominio del correo no pertenece al mismo dominio del Lider

	var_token := '';
	select x.id into var_id  
      from public.users as x  
     where x.email = lower(prm_email);
	if var_id is not null then
		var_error := 'AC001';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
	end if;
    
	select x.id, coalesce(x.organization_id,0), x.email 
	  into var_id, var_organization, var_email
      from public.users as x
     where x.id = prm_usuario;
	if var_id is null then
		var_error := 'AC014';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
	end if;
	if var_organization = 0 then
		var_error := 'AC015';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
	end if;

    select trim(lower(substring(var_email from position('@' in var_email)))) into var_dominio1;
    select trim(lower(substring(prm_email from position('@' in prm_email)))) into var_dominio2;

    IF (var_dominio1 != var_dominio2) THEN
		var_error := 'AC016';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
    END IF;
    
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