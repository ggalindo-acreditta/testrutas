SELECT id, name, 
       issuer, issuer_url, 
       category, duration, description, 
       skills, tags, criterion, materiality, score, 
       image_url, created_at, updated_at, expire_at, language, badge_id, organization_id, level
  FROM (
         SELECT x.id, x.name, 
                coalesce(x.issuer,'') as issuer, 
                coalesce(x.issuer_url,'') as issuer_url, 
                coalesce(x.category,'') as category, 
                x.duration, 
                coalesce(x.description,'') as description, 
                coalesce(x.skills,'') as skills, 
                coalesce(x.tags,'') as tags, 
                coalesce(x.criterion,'') as criterion, 
                x.materiality, 
                x.score, 
                coalesce(x.image_url,'') as image_url, 
                x.created_at,
                x.updated_at, 
                coalesce(x.expire_at,cast(now() as date)) as expire_at, 
                coalesce(x.language,'') as language, 
                coalesce(x.badge_id,'') as badge_id, 
                x.organization_id,
                coalesce(cast(x.level as character varying),'') as level
           FROM public.elements as x
                inner join public.users as u on x.organization_id = u.organization_id
          WHERE u.id = $(usuario)
        ) as x
 WHERE 1 = 1
 ${from:raw}
 ${to:raw}
 ${filter:raw}
 order by ${sort:raw}
 offset ${offset}