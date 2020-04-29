update public.elements
   set image_url = $(path)||id||'.png'
 where id = $(id);