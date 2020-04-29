select userid, email, firstname, lastname, password, error 
  from uf_user_confirm(cast ($(registration_code) as varchar));
 