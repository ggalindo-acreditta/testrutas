select error as error, register_id as id_element
  from uf_eliminar_elemento(cast($(id) as integer), cast($(usuario) as integer))