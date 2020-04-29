select error as error, register_id as id_element
from uf_registrar_elemento(
    $(name),
    $(issuer),
    $(issuer_url),
    $(category),
    cast($(duration) as integer),
    $(description),
    $(skills),
    $(tags),
    $(criterion),
    cast($(materiality) as materiality),
    cast($(score) as integer),
    $(image_url),
    cast($(expire_at) as date),
    $(language),
    $(badge_id),
    cast($(level) as level),
    cast($(usuario) as integer))