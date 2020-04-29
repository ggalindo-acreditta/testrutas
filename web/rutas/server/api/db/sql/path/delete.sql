select error as error, register_id as id_path
  from uf_eliminar_ruta(cast($(id) as integer), cast($(usuario) as integer))