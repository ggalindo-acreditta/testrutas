select
  prm_error as error
from public.uf_msg_carrier_add(
  $(carrier),
  cast($(type) as smallint),
  cast($(limit) as smallint)
);
