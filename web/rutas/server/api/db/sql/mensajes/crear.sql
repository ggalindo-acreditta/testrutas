select prm_error as error from uf_msg_add(
  cast($(type) as smallint),
  cast($(priority) as smallint),
  cast($(user) as uuid),
  cast($(address) as varchar),
  cast($(subject) as varchar),
  cast($(template) as varchar),
  cast($(data) as json)
);
