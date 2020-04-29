select
m.msg,
m.msg_type,
m.msg_priority,
m.address,
m.subject,
m.template,
m.data
from
msg m inner join msg_queue mc on m.msg = mc.msg
where m.msg_type = cast($(type) as smallint)
order by m.msg_priority asc, m.created_date asc, m.address asc
limit 1
