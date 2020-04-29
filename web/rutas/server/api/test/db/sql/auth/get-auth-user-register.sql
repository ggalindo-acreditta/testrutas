select
  auth_user_register,
  email,
  name,
  lastname,
  phone,
  verification_code,
  token,
  password,
  created_date
from
  public.auth_user_register
where
  email = lower($(email))
