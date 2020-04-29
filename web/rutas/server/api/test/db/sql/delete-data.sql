create or replace function uf_tmp_remove_test_data()
  returns integer as
$BODY$
begin

  return 0;
end
$BODY$
LANGUAGE 'plpgsql' VOLATILE;

select uf_tmp_remove_test_data();

drop function uf_tmp_remove_test_data();
