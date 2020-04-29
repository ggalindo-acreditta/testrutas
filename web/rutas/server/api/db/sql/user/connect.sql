select organizationid, error 
  from uf_user_connect(cast($(usuario) as integer),
                       cast($(name) as varchar),
                       cast($(domain) as varchar),
                       cast($(description) as varchar),
                       cast($(token) as varchar),
                       cast($(photo_url) as varchar),
                       cast($(acclaim_id) as uuid));
