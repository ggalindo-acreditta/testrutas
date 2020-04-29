ALTER TABLE public.organizations
 ADD COLUMN acclaim_id uuid NOT NULL;

-- FUNCTION: public.uf_user_connect(integer, character varying, character varying, character varying, character varying, character varying, uuid)
-- DROP FUNCTION public.uf_user_connect(integer, character varying, character varying, character varying, character varying, character varying, uuid);

CREATE OR REPLACE FUNCTION public.uf_user_connect(
	prm_user integer,
	prm_name character varying,
	prm_domain character varying,
	prm_description character varying,
	prm_token character varying,
	prm_photo_url character varying,
	prm_acclaim_id uuid)
    RETURNS TABLE(organizationid integer, error character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	var_user integer;
	var_organization integer;
	var_data_auth users%ROWTYPE;
	var_error varchar(5);
BEGIN
	-- ERRORES:
	-- U0001: Usuario no encontrado
    -- U0013: Conexion no valida, Su Organizacion ya se encuentra registrada
 
	select * into var_data_auth 
      from public.users as u 
     where u.id = prm_user;
	if not found then
		var_user := null;
		var_error := 'U0001';
		return query select 0 as organizationid, var_error as error;
		return;
    else 
    	if var_data_auth.status != 'ACTIVE' then
            var_user := null;
            var_error := 'U0005';
            return query select 0 as organizationid, var_error as error;
            return;
        else
        	select id into var_organization
              from organizations
             where acclaim_id = prm_acclaim_id;
            if var_organization is not null then
                var_user := null;
                var_error := 'U0013';
                return query select 0 as organizationid, var_error as error;
                return;
            else
                select coalesce(max(id),0)+1 into var_organization
                  from organizations;
                  
            	insert into organizations(id, name, domain, description, token, photo_url, acclaim_id)
                select var_organization, prm_name, prm_domain, prm_description, prm_token, prm_photo_url, prm_acclaim_id
                 where not exists(select 1 from organizations where acclaim_id = prm_acclaim_id);
                
				update public.users
                   set organization_id= var_organization
				 where id = prm_user;
                        
                var_error := '';
                var_user := var_data_auth.id;
                return query select var_organization as organizationid, var_error as error;
                return;
        	end if;
    	end if;
	end if;
END
$BODY$;
ALTER FUNCTION public.uf_user_connect(integer, character varying, character varying, character varying, character varying, character varying, uuid)
    OWNER TO postgres;

