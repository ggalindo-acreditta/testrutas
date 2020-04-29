update msg_carrier
set status = false
where msg_type = cast($(type) as smallint)
