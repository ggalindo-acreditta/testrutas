insert into msg_queue (
  msg,
  msg_carrier,
  queue_date
)
select msg, $(carrier), now()
from msg
where msg_type = cast($(type) as smallint) and
not exists (
  select 1 from msg_queue as x where x.msg = msg.msg
)
