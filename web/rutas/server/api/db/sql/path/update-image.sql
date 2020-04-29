update public.paths
   set image_url = $(path)||'path_'||id||'.png'
 where id = $(id);