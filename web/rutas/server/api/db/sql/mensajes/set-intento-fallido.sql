update msg
set last_attempt_date = now(),
tries = tries + 1,
errortext = cast($(errorText) as varchar(500))
where msg = $(msg)
