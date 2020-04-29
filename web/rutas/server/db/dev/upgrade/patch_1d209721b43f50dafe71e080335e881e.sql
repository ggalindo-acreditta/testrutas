-- Type: level
-- DROP TYPE public.level;
CREATE TYPE public.level AS ENUM
    ('Fundational', 'Intermediate', 'Advanced');
ALTER TYPE public.level
    OWNER TO postgres;
    
ALTER TABLE public.elements
    ADD COLUMN level level;

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
