
SELECT t.id, t.element_id, coalesce(p.element_id,0) as parent_element_id, coalesce(p.id,0) as parent_id,
       t.x, t.y, t.width, t.high
  FROM public.element_tree as t 
       left join public.element_tree as p on t.parent_id = p.id
 ORDER BY 1,2,3,4