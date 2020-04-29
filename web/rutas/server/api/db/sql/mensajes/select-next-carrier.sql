select
  x.msg_carrier,
  x.counter,
  x.max_counter
from (
  select
    cast(1 as smallint) as orden,
    update_date,
    msg_carrier,
    counter,
    max_counter
  from
    msg_carrier
  where
    msg_type = cast($(type) as smallint) and
    status = true and
    counter < max_counter and
    msg_carrier = $(carrier)
  union all
  select
    cast(2 as smallint) as orden,
    update_date,
    msg_carrier,
    counter,
    max_counter
  from
    msg_carrier
  where
    msg_type = cast($(type) as smallint) and
    status = true and
    counter < max_counter and
    msg_carrier <> $(carrier)
  order by
    1 asc, 2 desc
) as x
limit 1
