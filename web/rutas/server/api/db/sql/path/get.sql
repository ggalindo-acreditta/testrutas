SELECT x.id, x.name, 
       coalesce(x.description,'') as description, 
       coalesce(x.skills,'') as skills, 
       coalesce(x.tags,'') as tags, 
       coalesce(x.criterion,'') as criterion, 
       x.materiality, 
       x.difficulty, 
       coalesce(x.image_url,'') as image_url, 
       x.created_at,
       x.updated_at, 
       coalesce(x.expire_at,cast(now() as date)) as expire_at, 
       x.score, 
       coalesce(x.language,'') as language, 
       coalesce(x.element_tree_id,0) as element_tree_id,
       coalesce(t.element_id,0) as element_id,
       coalesce(t.x,0) as x,
       coalesce(t.y,0) as y,
       coalesce(t.width,0) as width,
       coalesce(t.high,0) as high,
       x.organization_id,
       null as tree
  FROM public.paths as x 
       LEFT JOIN public.element_tree as t on t.id = x.element_tree_id
 WHERE x.id = $(id)