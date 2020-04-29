ALTER TABLE public.element_tree DROP CONSTRAINT element_tree_parent_id_fkey;

ALTER TABLE public.element_tree
    ADD CONSTRAINT element_tree_parent_id_fkey FOREIGN KEY (parent_id)
    REFERENCES public.element_tree (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;

-- FUNCTION: public.from uf_eliminar_ruta(integer, integer);
-- DROP FUNCTION public.uf_eliminar_ruta(integer, integer);
CREATE OR REPLACE FUNCTION public.uf_eliminar_ruta(prm_id integer, prm_usuario integer)
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
BEGIN

	-- ERRORES
	-- PT001: Usuario no encontrado
	-- PT002: El usuario no esta conectado a ninguna Organizacion
    -- PT003: Elemento no encontrado
    -- PT007: Se indico mas de un elemento Principal
    -- PT008: No se indico la Ruta
    -- PT009: No se indico el Elemento Principal
    -- PT010: Ruta no Encontrada
    
	select id, coalesce(organization_id,0) into var_id, var_organization 
      from public.users 
     where id = prm_usuario;
	if var_id is null then
		var_error := 'PT001';
		return query select 0 as register_id, var_error as error;
		return;
	end if;
	if var_organization = 0 then
		var_error := 'PT002';
		return query select 0 as register_id, var_error as error;
		return;
	end if;    
    
	select id, element_tree_id into var_id, var_tree_id
      from public.paths 
     where id = prm_id and organization_id = var_organization;
    if var_id is null then
		var_error := 'PT010';
		return query select 0 as register_id, var_error as error;
		return;
    end if;
    
	delete from paths where id = var_id;
	delete from element_tree where id = var_tree_id;
        
	var_error := '';
	return query SELECT var_id as register_id, var_error as error;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_eliminar_ruta(integer, integer)
 OWNER TO postgres;