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