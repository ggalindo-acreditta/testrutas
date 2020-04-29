select userid as user, email, error, token 
  from uf_user_register(cast ($(email) as varchar),
                        cast ($(password) as varchar),
                        cast ($(firstname) as varchar),
                        cast ($(lastname) as varchar),
                        cast ($(token) as varchar));
 