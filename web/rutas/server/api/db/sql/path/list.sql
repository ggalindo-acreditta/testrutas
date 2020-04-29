SELECT id, name, description, 
       skills, tags, criterion, materiality, difficulty, score, 
       image_url, created_at, updated_at, expire_at, language, 
       coalesce(element_tree_id,0) as element_tree_id, 
       coalesce(element_id,0) as element_id,
       organization_id
  FROM (
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
                x.element_tree_id, t.element_id,
                x.organization_id
           FROM public.paths as x
                inner join public.users as u on x.organization_id = u.organization_id
                 left join public.element_tree as t on t.id = x.element_tree_id
          WHERE u.id = $(usuario)
        ) as x
 WHERE 1 = 1
 ${from:raw}
 ${to:raw}
 ${filter:raw}
 order by ${sort:raw}
 offset ${offset}