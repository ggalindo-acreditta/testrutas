update public.users
   set organization_id= NULL
 where id = $(id) and type = cast('LEADER' as user_type)