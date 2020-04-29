select
  auth_user,
  first_name,
  last_name,
  email,
  passwd,
  gen_language,
  gen_timezone,
  active,
  facebook_id,
  facebook_token,
  google_id,
  google_token
from
  public.auth_user
where
  email = 'generic@utest.com'
