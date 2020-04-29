select userid as user, email, error, token
  from uf_user_invite(cast ($(email) as varchar),
                      cast ($(firstname) as varchar),
                      cast ($(lastname) as varchar),
                      cast ($(token) as varchar),
                      cast ($(usuario) as integer));
 