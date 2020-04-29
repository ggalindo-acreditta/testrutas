SELECT x.id,  
       coalesce(x.firstname,'') as firstname,   
       coalesce(x.lastname,'') as lastname,   
       coalesce(x.email,'') as email,   
       x.type,   
       x.status,   
       coalesce(y.id,0) as organization_id, 
       coalesce(y.name,'') as organization_name, 
       coalesce(y.description,'') as organization_description, 
       coalesce(y.domain,'') as organization_domain, 
       coalesce(y.photo_url,'') as organization_photo_url,
       coalesce(cast(y.acclaim_id as char(36)),'') as acclaim_id, 
       coalesce(y.token,'') as token
  FROM public.users as x
       left join public.organizations as y on y.id = x.organization_id
 WHERE x.registration_code = $(code)