
select
/* auth_user */
au.auth_user as au_auth_user_id, au.first_name as au_first_name, au.last_name as au_last_name, au.email as au_email,
au.gen_language as au_gen_language, au.gen_timezone as au_gen_timezone, au.active as au_active,
au.facebook_id as au_facebook_id, au.facebook_token as au_facebook_token, au.google_id as au_google_id, au.google_token as au_google_token,
/* auth_user_data */
ad.auth_user_data as ad_auth_user_data_id,
ad.city as ad_city, ad.country as ad_country, ad.zipcode as ad_zipcode, ad.phone as ad_phone, ad.cell as ad_cell,
/* auth_user_preferences */
up.auth_user_preferences as up_auth_user_preferences_id, up.theme as up_theme,
/* auth_user_register */
coalesce((select count(*) from auth_user_register as xur where lower(xur.email) = lower($(email))), 0)::smallint as ur_auth_user_register_count
from auth_user au left join auth_user_data ad on au.auth_user = ad.auth_user
left join auth_user_preferences up on au.auth_user = up.auth_user
where
lower(au.email) = lower($(email))
