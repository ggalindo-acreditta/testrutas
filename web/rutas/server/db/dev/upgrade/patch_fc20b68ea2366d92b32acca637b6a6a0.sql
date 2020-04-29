-- FUNCTION: public.uf_user_auth(character varying)
-- DROP FUNCTION public.uf_user_auth(character varying);
DROP FUNCTION public.uf_user_auth(character varying);
CREATE OR REPLACE FUNCTION public.uf_user_auth(
	prm_email character varying)
    RETURNS TABLE(email character varying, userid integer, organizationid integer, error character varying, password character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	var_user integer;
	var_email varchar(50);
	var_data_auth users%ROWTYPE;
	var_error varchar(5);
	var_password varchar;
BEGIN
	-- ERRORES:
	-- U0001: Usuario no encontrado
 
	select * into var_data_auth 
      from public.users as u 
     where u.email = lower(prm_email);
	if not found then
		var_email := '';
		var_user := null;
		var_error := 'U0001';
		var_password := '';
		return query select var_email as email, 0 as userid, 0 as organizationid, var_error as error, var_password as password;
		return;
    else 
    	if var_data_auth.status != 'ACTIVE' then
            var_email := '';
            var_user := null;
            var_error := 'U0005';
            var_password := '';
            return query select var_email as email, 0 as userid, 0 as organizationid, var_error as error, var_password as password;
            return;
        else
            var_error := '';
            var_email := lower(prm_email);
            var_user := var_data_auth.id;
            var_password := var_data_auth.password;
            return query select var_email as email, var_user as userid, coalesce(var_data_auth.organization_id,0) as organizationid, var_error as error, var_data_auth.password as password;
            return;
    	end if;
	end if;
END
$BODY$;
ALTER FUNCTION public.uf_user_auth(character varying)  OWNER TO postgres;

