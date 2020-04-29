update msg_carrier
set sstatus = false
where
  msg_carrier = $(carrier) and
  msg_type = cast($(type) as smallint)
  and status = false
