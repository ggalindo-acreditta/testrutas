select x.userid, x.email, x.error, x.password,
       coalesce(y.id,0) as organization_id, 
       coalesce(y.name,'') as organization_name, 
       coalesce(y.description,'') as organization_description, 
       coalesce(y.domain,'') as organization_domain, 
       coalesce(y.photo_url,'') as organizacion_photo_url
  from ( select userid, email, organizationid, error, password 
           from uf_user_auth(cast($(email) as varchar))) 
       as x left join public.organizations as y on y.id = x.organizationid;
