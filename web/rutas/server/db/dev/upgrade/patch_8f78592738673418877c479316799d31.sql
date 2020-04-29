-- FUNCTION: public.from uf_registrar_ruta(character varying, character varying, character varying, character varying, character varying, materiality, difficulty, character varying, date, integer, character varying, integer[], integer[], integer);
-- DROP FUNCTION public.uf_registrar_ruta(character varying, character varying, character varying, character varying, character varying, materiality, difficulty, character varying, date, integer, character varying, integer[], integer[], integer);
CREATE OR REPLACE FUNCTION public.uf_registrar_ruta(
	prm_name character varying,
	prm_description character varying,
	prm_skills character varying,
	prm_tags character varying,
	prm_criterion character varying,
	prm_materiality materiality,
	prm_difficulty difficulty,
	prm_image_url character varying,
	prm_expire_at date,
	prm_score integer,
	prm_language character varying,
	prm_parent integer[],
	prm_element integer[],
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
    
    j integer;
    k integer;
    var_i integer;
    var_cont integer;
    var_cont2 integer;
    var_tree integer;
    var_principal integer;
    var_elementx integer[];
    var_element integer;
    var_idx integer[];
    var_aux integer;
BEGIN

	-- ERRORES
	-- PT001: Usuario no encontrado
	-- PT002: El usuario no esta conectado a ninguna Organizacion
    -- PT003: Elemento no encontrado
    -- PT007: Se indico mas de un elemento Principal
    -- PT008: No se indico la Ruta
    -- PT009: No se indico el Elemento Principal
    
	select id, coalesce(organization_id,0) into var_id,  var_organization 
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
    
    /**************************************************************************************/  
  	j := 1;
    var_cont := 0;
    var_principal := 0;
  	FOREACH var_i IN ARRAY prm_parent
  	LOOP    	
        IF prm_parent[j] is null and var_principal = 1 THEN
			var_error := 'PT007';
			return query SELECT 0 as register_id, var_error AS error;
			return;
        END IF;
        IF prm_parent[j] is null and var_principal = 0 THEN
        	var_principal := 1;
        END IF;
        
        IF prm_parent[j] is not null THEN
            SELECT id into var_element
              FROM elements
             WHERE id = prm_parent[j];    
            IF var_element is null THEN
                var_error := 'PT003';
                return query SELECT 0 as register_id, var_error AS error;
                return;
            END IF; 
        END IF;
        
		SELECT id into var_element
		  FROM elements
		 WHERE id = prm_element[j];    
		IF var_element is null THEN
			var_error := 'PT003';
			return query SELECT 0 as register_id, var_error AS error;
			return;
		END IF; 
        var_cont := var_cont + 1;
		j := j + 1;
  	END LOOP;
    
    IF var_cont = 0 THEN
		var_error := 'PT008';
		return query SELECT 0 as register_id, var_error AS error;
		return;
    END IF;    
    IF var_principal = 0 THEN
		var_error := 'PT009';
		return query SELECT 0 as register_id, var_error AS error;
		return;
    END IF;
    
    /**************************************************************************************/     
    SELECT coalesce(max(id),0)+1 into var_id
      FROM public.paths;
    
    INSERT INTO public.paths(id, name, description, skills, tags, criterion, 
                               materiality, difficulty, image_url, created_at, updated_at, expire_at, score, language, organization_id)
	SELECT var_id, prm_name, prm_description, prm_skills, prm_tags, prm_criterion, 
            prm_materiality, prm_difficulty, prm_image_url, now(), now(), prm_expire_at, prm_score, prm_language, organization_id
      FROM public.users
     WHERE id = prm_usuario;
     
    /**************************************************************************************/      
    /**************************************************************************************/    
  	k := 1; 
    var_cont2 := 0;
    LOOP     
    	IF prm_parent[k] is null THEN
            SELECT coalesce(max(id),0)+1 into var_principal
              FROM public.element_tree;
          
			var_cont2 := var_cont2 + 1;
            var_idx[prm_element[k]] := var_principal;
            var_elementx[var_cont2] := prm_element[k];
            INSERT into public.element_tree(id, parent_id, element_id) VALUES(var_principal, null, prm_element[k]);
        END IF;
		k := k + 1;
        EXIT WHEN k > var_cont;
  	END LOOP;        
       
  	j := 1;
    LOOP           	
    	k := 1;
        --insert into xxx select 'Buscando parent del elemente '||var_elementx[j];
        LOOP
            EXIT WHEN k > var_cont; 
            
        	IF prm_parent[k] = var_elementx[j] THEN
                SELECT coalesce(max(id),0)+1 into var_aux
                  FROM public.element_tree;
                  
            	var_cont2 := var_cont2 + 1;
                var_idx[prm_element[k]] := var_aux;
                var_elementx[var_cont2] := prm_element[k];
                
        		--insert into xxx select var_elementx[j]||' Parent '||prm_element[k]||' Guardado en '||var_aux;
 
                INSERT into public.element_tree(id, parent_id, element_id) VALUES(var_aux, var_idx[var_elementx[j]], prm_element[k]);
            END IF;
            k := k + 1;	
		END LOOP; 	
        
		j := j + 1;
		EXIT WHEN j > var_cont2;
	END LOOP;
    
    UPDATE public.paths
       SET element_tree_id = var_principal
     WHERE id = var_id;     
        
	var_error := '';
	return query SELECT var_id as register_id, var_error as error;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_registrar_ruta(character varying, character varying, character varying, character varying, character varying, materiality, difficulty, character varying, date, integer, character varying, integer[], integer[], integer)
 OWNER TO postgres;
 
 
  

