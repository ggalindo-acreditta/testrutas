select
  msg_carrier,
  counter,
  max_counter,
  status
from
  msg_carrier
where
  msg_type = cast($(type) as smallint) and
  msg_carrier = $(carrier)
