/* msg enviado */
insert into msg_sent (
  msg, msg_type, msg_carrier, msg_priority, created_date,
  sent_date, tries, max_tries, address, subject, template, data
)
select
  msg, msg_type, $(carrier), msg_priority, created_date,
  now(), tries, max_tries, address, subject, template, data
from
  msg
where
msg = $(msg);

/* eliminar de la cola*/
delete from msg_queue where msg = $(msg);

/* eliminar de los pendientes */
delete from msg where msg = $(msg);

/* actualizar estadisticas del carrier */
update msg_carrier
set counter = counter + 1, update_date = now()
where msg_carrier = $(carrier) and msg_type = cast($(type) as smallint)
