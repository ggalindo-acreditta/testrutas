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
    var_tipo user_type;
	var_error varchar(5);
	var_organization integer;
BEGIN     
	-- ERRORES
	-- E0001: Usuario no encontrado
	-- E0002: El usuario no esta conectado a ninguna Organizacion
    -- E0003: Elemento no encontrado
    -- E0008: Ya existe un elemento con el nombre ingresado
    -- E0009: Los elementos solo pueden ser creados por el Lider de la Organizacion
    
	select id, coalesce(organization_id,0), type 
      into var_id, var_organization, var_tipo
      from public.users 
     where id = prm_usuario;
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
    /*
    if (var_tipo <> cast('LEADER' as user_type)) then
		var_error := 'E0009';
		return query select 0 as register_id, var_error as error;
		return;
	end if;   
    */
    
	select id into var_id 
      from public.elements
     where lower(name) = lower(prm_name);
	if var_id is not null then
		var_error := 'E0008';
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
    var_tipo user_type;
	var_error varchar(5);
	var_organization integer;
BEGIN
	-- ERRORES
	-- E0001: Usuario no encontrado
	-- E0002: El usuario no esta conectado a ninguna Organizacion
    -- E0003: Elemento no encontrado
    -- E0008: Ya existe un elemento con el nombre ingresado
    -- E0010: Los elementos solo pueden ser actualizados por el Lider de la Organizacion
    
	select id, coalesce(organization_id,0), 
      type into var_id, var_organization, var_tipo
      from public.users 
     where id = prm_usuario;
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
    /*
    if (var_tipo <> cast('LEADER' as user_type)) then
		var_error := 'E0010';
		return query select 0 as register_id, var_error as error;
		return;
	end if;     
    */
    
	select id into var_id 
      from public.elements
     where id = prm_id;
	if var_id is null then
		var_error := 'E0003';
		return query select 0 as register_id, var_error as error;
		return;
	end if;    
    
	select id into var_id 
      from public.elements
     where id <> prm_id and lower(name) = lower(prm_name);
	if var_id is not null then
		var_error := 'E0008';
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
AS $BODY$

DECLARE
	var_id integer;
    var_tipo user_type;
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
    -- E0010: Los elementos solo pueden ser eliminados por el Lider de la Organizacion
    
	select id, coalesce(organization_id,0), type into var_id, var_organization, var_tipo
      from public.users 
     where id = prm_usuario;
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
    /*     
    if (var_tipo <> cast('LEADER' as user_type)) then
		var_error := 'E0011';
		return query select 0 as register_id, var_error as error;
		return;
	end if;    
    */ 
    
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
    var_tipo user_type;
BEGIN
	-- ERRORES
	-- AC001: Usuario ya esta registrado
	-- AC010: Email no existe en las solicitudes
	-- AC014: Usuario no Registrado
	-- AC015: El Usuario no esta conectado a ninguna Organizacion
	-- AC016: El Dominio del correo no pertenece al mismo dominio del Lider
	-- AC017: Solo los Lideres de la Organizacion pueden realizar invitaciones

	var_token := '';
	select x.id into var_id  
      from public.users as x  
     where x.email = lower(prm_email);
	if var_id is not null then
		var_error := 'AC001';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
	end if;
    
	select x.id, coalesce(x.organization_id,0), x.email, x.type 
	  into var_id, var_organization, var_email, var_tipo
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
    if (var_tipo <> cast('LEADER' as user_type)) then
		var_error := 'AC017';
		return query select 0 as register_id, var_error as error;
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
