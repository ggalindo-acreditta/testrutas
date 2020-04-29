select userid, email, firstname, lastname, password, error 
  from uf_user_confirm_invite(cast ($(code) as varchar),
                              cast ($(password) as varchar),
                              cast ($(firstname) as varchar),
                              cast ($(lastname) as varchar));
 