

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET search_path = public, pg_catalog;

--
-- Name: uf_auth_get_parameter_boolean(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_auth_get_parameter_boolean(prm_parameter character varying) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
declare var_return boolean;
declare var_parameter varchar(20);
begin
  var_parameter := lower(trim(coalesce(prm_parameter, '')));
  var_return := coalesce((select boolean_value from auth_parameter where auth_parameter = var_parameter), null);
  return var_return;
end 
$$;


ALTER FUNCTION public.uf_auth_get_parameter_boolean(prm_parameter character varying) OWNER TO postgres;

--
-- Name: uf_auth_get_parameter_date(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_auth_get_parameter_date(prm_parameter character varying) RETURNS timestamp without time zone
    LANGUAGE plpgsql
    AS $$
declare var_return timestamp;
declare var_parameter varchar(20);
begin
  var_parameter := lower(trim(coalesce(prm_parameter, '')));
  var_return := coalesce((select date_value from auth_parameter where auth_parameter = var_parameter), null);
  return var_return;
end 
$$;


ALTER FUNCTION public.uf_auth_get_parameter_date(prm_parameter character varying) OWNER TO postgres;

--
-- Name: uf_auth_get_parameter_decimal(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_auth_get_parameter_decimal(prm_parameter character varying) RETURNS numeric
    LANGUAGE plpgsql
    AS $$
declare var_return numeric(20,6);
declare var_parameter varchar(20);
begin
  var_parameter := lower(trim(coalesce(prm_parameter, '')));
  var_return := coalesce((select decimal_value from auth_parameter where auth_parameter = var_parameter), null);
  return var_return;
end 
$$;


ALTER FUNCTION public.uf_auth_get_parameter_decimal(prm_parameter character varying) OWNER TO postgres;

--
-- Name: uf_auth_get_parameter_integer(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_auth_get_parameter_integer(prm_parameter character varying) RETURNS integer
    LANGUAGE plpgsql
    AS $$
declare var_return integer;
declare var_parameter varchar(20);
begin
  var_parameter := lower(trim(coalesce(prm_parameter, '')));
  var_return := coalesce((select integer_value from auth_parameter where auth_parameter = var_parameter), null);
  return var_return;
end 
$$;


ALTER FUNCTION public.uf_auth_get_parameter_integer(prm_parameter character varying) OWNER TO postgres;

--
-- Name: uf_auth_get_parameter_string(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_auth_get_parameter_string(prm_parameter character varying) RETURNS character varying
    LANGUAGE plpgsql
    AS $$
declare var_return varchar(250);
declare var_parameter varchar(20);
begin
  var_parameter := lower(trim(coalesce(prm_parameter, '')));
  var_return := coalesce((select string_value from auth_parameter where auth_parameter = var_parameter), null);
  return var_return;
end 
$$;


ALTER FUNCTION public.uf_auth_get_parameter_string(prm_parameter character varying) OWNER TO postgres;

--
-- Name: uf_auth_get_parameter_uuid(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_auth_get_parameter_uuid(prm_parameter character varying) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
declare var_return uuid;
declare var_parameter varchar(20);
begin
  var_parameter := lower(trim(coalesce(prm_parameter, '')));
  var_return := coalesce((select uuid_value from auth_parameter where auth_parameter = var_parameter), null);
  return var_return;
end 
$$;


ALTER FUNCTION public.uf_auth_get_parameter_uuid(prm_parameter character varying) OWNER TO postgres;

--
-- Name: uf_dbadm_attributeexists(name, name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_attributeexists(prm_schema name, prm_typename name, prm_attributename name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_return smallint;
begin
  var_return := coalesce( (select count(*) from information_schema.attributes
    where udt_schema = prm_schema and udt_name = prm_typename and attribute_name = prm_attributename), 0 );

  return var_return;
end

$$;


ALTER FUNCTION public.uf_dbadm_attributeexists(prm_schema name, prm_typename name, prm_attributename name) OWNER TO postgres;

--
-- Name: uf_dbadm_columnexists(name, name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_columnexists(prm_schema name, prm_tablename name, prm_columnname name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_return smallint;
begin
  var_return := coalesce( (select count(*) from information_schema.columns
    where table_schema = prm_schema and table_name = prm_tablename and column_name = prm_columnname), 0 );

  return var_return;
end

$$;


ALTER FUNCTION public.uf_dbadm_columnexists(prm_schema name, prm_tablename name, prm_columnname name) OWNER TO postgres;

--
-- Name: uf_dbadm_domainexists(name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_domainexists(prm_schema name, prm_name name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_return smallint;
begin
  var_return := coalesce( (select count(*) from information_schema.domains where domain_schema = prm_schema and domain_name = prm_name), 0 );

  return var_return;
end

$$;


ALTER FUNCTION public.uf_dbadm_domainexists(prm_schema name, prm_name name) OWNER TO postgres;

--
-- Name: uf_dbadm_dropfunction(name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_dropfunction(prm_schema name, prm_name name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_nargs smallint;
  var_args oidvector;
  var_argmodes char[];
  var_continuar smallint;
  var_sql varchar(1024);
  var_tmparg varchar(100);
begin
  -- Elimina todas las funciones bajo el nombre prm_schema.prm_name

  var_sql := '';
  var_continuar := 1;
  while var_continuar = 1 loop
    var_nargs := null;
    var_args := null;
    -- obtener info de la funcion
    select a.pronargs, a.proargtypes, a.proargmodes
    into var_nargs, var_args, var_argmodes
    from pg_proc a inner join pg_namespace b on a.pronamespace = b.oid
    where a.proname = prm_name and b.nspname = prm_schema
    limit 1;
    if var_args is null then
      var_continuar := 0;
      exit;
    end if;
    -- raise notice 'Cant param %',var_nargs::varchar;
    -- se tiene la cantidad de argmentos y el array de los tipos de datos
    var_sql := 'drop function if exists ' || prm_schema::varchar || '.' || prm_name::varchar || '(';
    -- armar los parametros
    FOR i IN 1..var_nargs LOOP
      select b.nspname::varchar || '.' || a.typname
      into var_tmparg
      from pg_type a inner join pg_namespace b on a.typnamespace = b.oid
      where a.oid = var_args[i - 1];

      if var_argmodes is not null then
        if var_argmodes[i] = 'i' then
          var_tmparg := 'IN ' || var_tmparg;
        elsif var_argmodes[i] = 'o' then
          var_tmparg := 'OUT ' || var_tmparg;
        elsif var_argmodes[i] = 'b' then
          var_tmparg := 'INOUT ' || var_tmparg;
        end if;
      end if;

      var_sql := var_sql || var_tmparg  ;
      if i <> var_nargs then
        var_sql := var_sql || ', '  ;
      end if;
    END LOOP;

    var_sql := var_sql || ');';
    var_nargs := null;
    var_args := null;

    execute var_sql;

  end loop;

  return 1;
end

$$;


ALTER FUNCTION public.uf_dbadm_dropfunction(prm_schema name, prm_name name) OWNER TO postgres;

--
-- Name: uf_dbadm_tableexists(name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_tableexists(prm_schema name, prm_name name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_return smallint;
begin
  var_return := coalesce( (select count(*) from information_schema.schemata as xa
  inner join information_schema.tables as xb on xa.schema_name = xb.table_schema
  where xa.schema_name = prm_schema and
  xb.table_type = 'BASE TABLE' and xb.table_name = prm_name), 0 );


  return var_return;
end

$$;


ALTER FUNCTION public.uf_dbadm_tableexists(prm_schema name, prm_name name) OWNER TO postgres;

--
-- Name: uf_dbadm_typeexists(name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_typeexists(prm_schema name, prm_typename name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_return smallint;
begin
  var_return := coalesce( (select count(*) from information_schema.user_defined_types
    where user_defined_type_schema = prm_schema and user_defined_type_name = prm_typename), 0 );

  return var_return;
end

$$;


ALTER FUNCTION public.uf_dbadm_typeexists(prm_schema name, prm_typename name) OWNER TO postgres;

--
-- Name: uf_dbadm_viewexists(name, name); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION uf_dbadm_viewexists(prm_schema name, prm_name name) RETURNS integer
    LANGUAGE plpgsql
    AS $$

declare
  var_return smallint;
begin
  var_return := coalesce( (select count(*) from information_schema.views where table_schema = prm_schema and table_name = prm_name), 0 );

  return var_return;
end

$$;


ALTER FUNCTION public.uf_dbadm_viewexists(prm_schema name, prm_name name) OWNER TO postgres;

--
-- Name: uf_genuuid(character varying); Type: FUNCTION; Schema: public; Owner: postgres
--


ALTER FUNCTION public.uf_genuuid(prm_name character varying) OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_api; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_api (
    auth_api uuid DEFAULT uf_genuuid('seq_auth_api'::character varying) NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(250) NOT NULL,
    version character varying(20) NOT NULL
);


ALTER TABLE auth_api OWNER TO postgres;

--
-- Name: auth_application; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_application (
    auth_application uuid DEFAULT uf_genuuid('seq_auth_application'::character varying) NOT NULL,
    auth_plataform smallint NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(250) NOT NULL,
    secret character varying(100) NOT NULL
);


ALTER TABLE auth_application OWNER TO postgres;

--
-- Name: auth_application_scope; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_application_scope (
    auth_application uuid NOT NULL,
    auth_scope smallint NOT NULL
);


ALTER TABLE auth_application_scope OWNER TO postgres;

--
-- Name: auth_parameter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_parameter (
    auth_parameter character varying(20) NOT NULL,
    description character varying(100) NOT NULL,
    value_type smallint NOT NULL,
    string_value character varying(250),
    integer_value integer,
    decimal_value numeric(20,6),
    date_value timestamp without time zone,
    boolean_value boolean,
    uuid_value uuid,
    CONSTRAINT chk_auth_parameter CHECK ((((value_type = 1) AND (integer_value IS NULL) AND (decimal_value IS NULL) AND (date_value IS NULL) AND (boolean_value IS NULL) AND (uuid_value IS NULL)) OR ((value_type = 2) AND (string_value IS NULL) AND (decimal_value IS NULL) AND (date_value IS NULL) AND (boolean_value IS NULL) AND (uuid_value IS NULL)) OR ((value_type = 3) AND (string_value IS NULL) AND (integer_value IS NULL) AND (date_value IS NULL) AND (boolean_value IS NULL) AND (uuid_value IS NULL)) OR ((value_type = 4) AND (string_value IS NULL) AND (integer_value IS NULL) AND (decimal_value IS NULL) AND (boolean_value IS NULL) AND (uuid_value IS NULL)) OR ((value_type = 5) AND (string_value IS NULL) AND (integer_value IS NULL) AND (decimal_value IS NULL) AND (date_value IS NULL) AND (uuid_value IS NULL)) OR ((value_type = 6) AND (string_value IS NULL) AND (integer_value IS NULL) AND (decimal_value IS NULL) AND (date_value IS NULL) AND (boolean_value IS NULL))))
);


ALTER TABLE auth_parameter OWNER TO postgres;

--
-- Name: auth_plataform; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_plataform (
    auth_plataform smallint NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(250) NOT NULL
);


ALTER TABLE auth_plataform OWNER TO postgres;

--
-- Name: auth_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_role (
    auth_role uuid DEFAULT uf_genuuid('seq_auth_role'::character varying) NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(250) NOT NULL
);


ALTER TABLE auth_role OWNER TO postgres;

--
-- Name: auth_role_scope; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_role_scope (
    auth_role uuid NOT NULL,
    auth_scope smallint NOT NULL
);


ALTER TABLE auth_role_scope OWNER TO postgres;

--
-- Name: auth_scope; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_scope (
    auth_scope smallint NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(250) NOT NULL
);


ALTER TABLE auth_scope OWNER TO postgres;

--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_user (
    auth_user uuid NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50),
    email character varying(80) NOT NULL,
    passwd character varying(60),
    gen_language smallint NOT NULL,
    gen_timezone smallint NOT NULL,
    active boolean DEFAULT true NOT NULL,
    facebook_id character varying(250),
    facebook_token character varying(250),
    google_id character varying(250),
    google_token character varying(250)
);


ALTER TABLE auth_user OWNER TO postgres;

--
-- Name: auth_user_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE auth_user_role (
    auth_user uuid NOT NULL,
    auth_role uuid NOT NULL
);


ALTER TABLE auth_user_role OWNER TO postgres;

--
-- Name: gen_country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE gen_country (
    gen_country smallint NOT NULL,
    code character varying(3) NOT NULL,
    name character varying(60) NOT NULL,
    popular smallint DEFAULT 99 NOT NULL
);


ALTER TABLE gen_country OWNER TO postgres;

--
-- Name: gen_language; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE gen_language (
    gen_language smallint NOT NULL,
    code character varying(3) NOT NULL,
    name character varying(60) NOT NULL,
    popular smallint DEFAULT 99 NOT NULL
);


ALTER TABLE gen_language OWNER TO postgres;

--
-- Name: gen_timezone; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE gen_timezone (
    gen_timezone smallint NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE gen_timezone OWNER TO postgres;

--
-- Name: vw_gen_timezone; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW vw_gen_timezone AS
 SELECT a.gen_timezone,
    a.name,
    b.abbrev,
    b.utc_offset,
    b.is_dst
   FROM (gen_timezone a
     JOIN pg_timezone_names b ON (((a.name)::text = b.name)));


ALTER TABLE vw_gen_timezone OWNER TO postgres;

--
-- Data for Name: auth_api; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_application; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_application_scope; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_parameter; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO auth_parameter (auth_parameter, description, value_type, string_value, integer_value, decimal_value, date_value, boolean_value, uuid_value) VALUES ('session_key', 'Shared session key used by all apis''s', 1, 'defaultsessionkey', NULL, NULL, NULL, NULL, NULL);
INSERT INTO auth_parameter (auth_parameter, description, value_type, string_value, integer_value, decimal_value, date_value, boolean_value, uuid_value) VALUES ('default_language', 'Default language for users', 2, NULL, 13, NULL, NULL, NULL, NULL);
INSERT INTO auth_parameter (auth_parameter, description, value_type, string_value, integer_value, decimal_value, date_value, boolean_value, uuid_value) VALUES ('default_country', 'Default country for users', 2, NULL, 235, NULL, NULL, NULL, NULL);
INSERT INTO auth_parameter (auth_parameter, description, value_type, string_value, integer_value, decimal_value, date_value, boolean_value, uuid_value) VALUES ('default_timezone', 'Default timezone for users', 2, NULL, 581, NULL, NULL, NULL, NULL);


--
-- Data for Name: auth_plataform; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO auth_plataform (auth_plataform, name, description) VALUES (1, 'Web', 'Web Applications');
INSERT INTO auth_plataform (auth_plataform, name, description) VALUES (2, 'IOs', 'IOs Applications');
INSERT INTO auth_plataform (auth_plataform, name, description) VALUES (3, 'Android', 'Android Applications');
INSERT INTO auth_plataform (auth_plataform, name, description) VALUES (4, 'Other', 'Others like API''s, Postman, etc.');


--
-- Data for Name: auth_role; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_role_scope; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_scope; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: auth_user_role; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: gen_country; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO gen_country (gen_country, code, name, popular) VALUES (1, 'ABW', 'Aruba', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (2, 'AFG', 'Afghanistan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (3, 'AGO', 'Angola', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (4, 'AIA', 'Anguilla', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (5, 'ALA', 'Åland Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (6, 'ALB', 'Albania', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (7, 'AND', 'Andorra', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (8, 'ARE', 'United Arab Emirates', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (9, 'ARG', 'Argentina', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (10, 'ARM', 'Armenia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (11, 'ASM', 'American Samoa', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (12, 'ATA', 'Antarctica', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (13, 'ATF', 'French Southern Territories', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (14, 'ATG', 'Antigua and Barbuda', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (15, 'AUS', 'Australia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (16, 'AUT', 'Austria', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (17, 'AZE', 'Azerbaijan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (18, 'BDI', 'Burundi', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (19, 'BEL', 'Belgium', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (20, 'BEN', 'Benin', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (21, 'BES', 'Bonaire, Sint Eustatius and Saba', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (22, 'BFA', 'Burkina Faso', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (23, 'BGD', 'Bangladesh', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (24, 'BGR', 'Bulgaria', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (25, 'BHR', 'Bahrain', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (26, 'BHS', 'Bahamas', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (27, 'BIH', 'Bosnia and Herzegovina', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (28, 'BLM', 'Saint Barthélemy', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (29, 'BLR', 'Belarus', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (30, 'BLZ', 'Belize', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (31, 'BMU', 'Bermuda', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (32, 'BOL', 'Bolivia, Plurinational State of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (33, 'BRA', 'Brazil', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (34, 'BRB', 'Barbados', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (35, 'BRN', 'Brunei Darussalam', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (36, 'BTN', 'Bhutan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (37, 'BVT', 'Bouvet Island', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (38, 'BWA', 'Botswana', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (39, 'CAF', 'Central African Republic', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (40, 'CAN', 'Canada', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (41, 'CCK', 'Cocos (Keeling) Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (42, 'CHE', 'Switzerland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (43, 'CHL', 'Chile', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (44, 'CHN', 'China', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (45, 'CIV', 'Côte d''Ivoire', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (46, 'CMR', 'Cameroon', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (47, 'COD', 'Congo, the Democratic Republic of the', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (48, 'COG', 'Congo', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (49, 'COK', 'Cook Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (50, 'COL', 'Colombia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (51, 'COM', 'Comoros', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (52, 'CPV', 'Cabo Verde', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (53, 'CRI', 'Costa Rica', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (54, 'CUB', 'Cuba', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (55, 'CUW', 'Curaçao', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (56, 'CXR', 'Christmas Island', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (57, 'CYM', 'Cayman Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (58, 'CYP', 'Cyprus', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (59, 'CZE', 'Czechia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (60, 'DEU', 'Germany', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (61, 'DJI', 'Djibouti', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (62, 'DMA', 'Dominica', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (63, 'DNK', 'Denmark', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (64, 'DOM', 'Dominican Republic', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (65, 'DZA', 'Algeria', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (66, 'ECU', 'Ecuador', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (67, 'EGY', 'Egypt', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (68, 'ERI', 'Eritrea', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (69, 'ESH', 'Western Sahara', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (70, 'ESP', 'Spain', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (71, 'EST', 'Estonia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (72, 'ETH', 'Ethiopia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (73, 'FIN', 'Finland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (74, 'FJI', 'Fiji', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (75, 'FLK', 'Falkland Islands (Malvinas)', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (76, 'FRA', 'France', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (77, 'FRO', 'Faroe Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (78, 'FSM', 'Micronesia, Federated States of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (79, 'GAB', 'Gabon', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (80, 'GBR', 'United Kingdom', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (81, 'GEO', 'Georgia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (82, 'GGY', 'Guernsey', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (83, 'GHA', 'Ghana', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (84, 'GIB', 'Gibraltar', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (85, 'GIN', 'Guinea', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (86, 'GLP', 'Guadeloupe', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (87, 'GMB', 'Gambia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (88, 'GNB', 'Guinea-Bissau', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (89, 'GNQ', 'Equatorial Guinea', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (90, 'GRC', 'Greece', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (91, 'GRD', 'Grenada', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (92, 'GRL', 'Greenland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (93, 'GTM', 'Guatemala', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (94, 'GUF', 'French Guiana', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (95, 'GUM', 'Guam', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (96, 'GUY', 'Guyana', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (97, 'HKG', 'Hong Kong', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (98, 'HMD', 'Heard Island and McDonald Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (99, 'HND', 'Honduras', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (100, 'HRV', 'Croatia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (101, 'HTI', 'Haiti', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (102, 'HUN', 'Hungary', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (103, 'IDN', 'Indonesia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (104, 'IMN', 'Isle of Man', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (105, 'IND', 'India', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (106, 'IOT', 'British Indian Ocean Territory', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (107, 'IRL', 'Ireland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (108, 'IRN', 'Iran, Islamic Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (109, 'IRQ', 'Iraq', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (110, 'ISL', 'Iceland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (111, 'ISR', 'Israel', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (112, 'ITA', 'Italy', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (113, 'JAM', 'Jamaica', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (114, 'JEY', 'Jersey', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (115, 'JOR', 'Jordan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (116, 'JPN', 'Japan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (117, 'KAZ', 'Kazakhstan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (118, 'KEN', 'Kenya', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (119, 'KGZ', 'Kyrgyzstan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (120, 'KHM', 'Cambodia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (121, 'KIR', 'Kiribati', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (122, 'KNA', 'Saint Kitts and Nevis', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (123, 'KOR', 'Korea, Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (124, 'KWT', 'Kuwait', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (125, 'LAO', 'Lao People''s Democratic Republic', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (126, 'LBN', 'Lebanon', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (127, 'LBR', 'Liberia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (128, 'LBY', 'Libya', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (129, 'LCA', 'Saint Lucia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (130, 'LIE', 'Liechtenstein', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (131, 'LKA', 'Sri Lanka', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (132, 'LSO', 'Lesotho', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (133, 'LTU', 'Lithuania', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (134, 'LUX', 'Luxembourg', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (135, 'LVA', 'Latvia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (136, 'MAC', 'Macao', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (137, 'MAF', 'Saint Martin (French part)', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (138, 'MAR', 'Morocco', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (139, 'MCO', 'Monaco', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (140, 'MDA', 'Moldova, Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (141, 'MDG', 'Madagascar', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (142, 'MDV', 'Maldives', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (143, 'MEX', 'Mexico', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (144, 'MHL', 'Marshall Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (145, 'MKD', 'Macedonia, the former Yugoslav Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (146, 'MLI', 'Mali', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (147, 'MLT', 'Malta', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (148, 'MMR', 'Myanmar', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (149, 'MNE', 'Montenegro', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (150, 'MNG', 'Mongolia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (151, 'MNP', 'Northern Mariana Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (152, 'MOZ', 'Mozambique', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (153, 'MRT', 'Mauritania', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (154, 'MSR', 'Montserrat', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (155, 'MTQ', 'Martinique', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (156, 'MUS', 'Mauritius', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (157, 'MWI', 'Malawi', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (158, 'MYS', 'Malaysia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (159, 'MYT', 'Mayotte', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (160, 'NAM', 'Namibia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (161, 'NCL', 'New Caledonia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (162, 'NER', 'Niger', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (163, 'NFK', 'Norfolk Island', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (164, 'NGA', 'Nigeria', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (165, 'NIC', 'Nicaragua', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (166, 'NIU', 'Niue', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (167, 'NLD', 'Netherlands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (168, 'NOR', 'Norway', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (169, 'NPL', 'Nepal', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (170, 'NRU', 'Nauru', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (171, 'NZL', 'New Zealand', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (172, 'OMN', 'Oman', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (173, 'PAK', 'Pakistan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (174, 'PAN', 'Panama', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (175, 'PCN', 'Pitcairn', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (176, 'PER', 'Peru', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (177, 'PHL', 'Philippines', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (178, 'PLW', 'Palau', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (179, 'PNG', 'Papua New Guinea', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (180, 'POL', 'Poland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (181, 'PRI', 'Puerto Rico', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (182, 'PRK', 'Korea, Democratic People''s Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (183, 'PRT', 'Portugal', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (184, 'PRY', 'Paraguay', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (185, 'PSE', 'Palestine, State of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (186, 'PYF', 'French Polynesia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (187, 'QAT', 'Qatar', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (188, 'REU', 'Réunion', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (189, 'ROU', 'Romania', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (190, 'RUS', 'Russian Federation', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (191, 'RWA', 'Rwanda', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (192, 'SAU', 'Saudi Arabia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (193, 'SDN', 'Sudan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (194, 'SEN', 'Senegal', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (195, 'SGP', 'Singapore', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (196, 'SGS', 'South Georgia and the South Sandwich Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (197, 'SHN', 'Saint Helena, Ascension and Tristan da Cunha', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (198, 'SJM', 'Svalbard and Jan Mayen', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (199, 'SLB', 'Solomon Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (200, 'SLE', 'Sierra Leone', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (201, 'SLV', 'El Salvador', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (202, 'SMR', 'San Marino', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (203, 'SOM', 'Somalia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (204, 'SPM', 'Saint Pierre and Miquelon', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (205, 'SRB', 'Serbia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (206, 'SSD', 'South Sudan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (207, 'STP', 'Sao Tome and Principe', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (208, 'SUR', 'Suriname', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (209, 'SVK', 'Slovakia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (210, 'SVN', 'Slovenia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (211, 'SWE', 'Sweden', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (212, 'SWZ', 'Swaziland', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (213, 'SXM', 'Sint Maarten (Dutch part)', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (214, 'SYC', 'Seychelles', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (215, 'SYR', 'Syrian Arab Republic', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (216, 'TCA', 'Turks and Caicos Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (217, 'TCD', 'Chad', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (218, 'TGO', 'Togo', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (219, 'THA', 'Thailand', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (220, 'TJK', 'Tajikistan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (221, 'TKL', 'Tokelau', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (222, 'TKM', 'Turkmenistan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (223, 'TLS', 'Timor-Leste', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (224, 'TON', 'Tonga', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (225, 'TTO', 'Trinidad and Tobago', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (226, 'TUN', 'Tunisia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (227, 'TUR', 'Turkey', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (228, 'TUV', 'Tuvalu', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (229, 'TWN', 'Taiwan, Province of China', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (230, 'TZA', 'Tanzania, United Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (231, 'UGA', 'Uganda', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (232, 'UKR', 'Ukraine', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (233, 'UMI', 'United States Minor Outlying Islands', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (234, 'URY', 'Uruguay', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (236, 'UZB', 'Uzbekistan', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (237, 'VAT', 'Holy See', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (238, 'VCT', 'Saint Vincent and the Grenadines', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (239, 'VEN', 'Venezuela, Bolivarian Republic of', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (240, 'VGB', 'Virgin Islands, British', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (241, 'VIR', 'Virgin Islands, U.S.', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (242, 'VNM', 'Viet Nam', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (243, 'VUT', 'Vanuatu', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (244, 'WLF', 'Wallis and Futuna', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (245, 'WSM', 'Samoa', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (246, 'YEM', 'Yemen', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (247, 'ZAF', 'South Africa', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (248, 'ZMB', 'Zambia', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (249, 'ZWE', 'Zimbabwe', 99);
INSERT INTO gen_country (gen_country, code, name, popular) VALUES (235, 'USA', 'United States of America', 1);


--
-- Data for Name: gen_language; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO gen_language (gen_language, code, name, popular) VALUES (1, 'af', 'Afrikaans', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (2, 'ar', 'Arabic', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (3, 'az', 'Azeri (Latin)', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (4, 'be', 'Belarusian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (5, 'bg', 'Bulgarian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (6, 'ca', 'Catalan', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (7, 'cs', 'Czech', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (8, 'cy', 'Welsh', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (9, 'da', 'Danish', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (10, 'de', 'German', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (11, 'dv', 'Divehi', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (12, 'el', 'Greek', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (14, 'eo', 'Esperanto', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (16, 'et', 'Estonian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (17, 'eu', 'Basque', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (18, 'fa', 'Farsi', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (19, 'fi', 'Finnish', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (20, 'fo', 'Faroese', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (21, 'fr', 'French', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (22, 'gl', 'Galician', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (23, 'gu', 'Gujarati', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (24, 'he', 'Hebrew', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (25, 'hi', 'Hindi', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (26, 'hr', 'Croatian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (27, 'hu', 'Hungarian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (28, 'hy', 'Armenian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (29, 'id', 'Indonesian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (30, 'is', 'Icelandic', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (31, 'it', 'Italian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (32, 'ja', 'Japanese', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (33, 'ka', 'Georgian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (34, 'kk', 'Kazakh', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (35, 'kn', 'Kannada', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (36, 'ko', 'Korean', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (37, 'kok', 'Konkani', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (38, 'ky', 'Kyrgyz', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (39, 'lt', 'Lithuanian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (40, 'lv', 'Latvian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (41, 'mi', 'Maori', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (42, 'mk', 'FYRO Macedonian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (43, 'mn', 'Mongolian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (44, 'mr', 'Marathi', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (45, 'ms', 'Malay', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (46, 'mt', 'Maltese', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (47, 'nb', 'Norwegian (Bokm?l)', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (48, 'nl', 'Dutch', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (49, 'ns', 'Northern Sotho', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (50, 'pa', 'Punjabi', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (51, 'pl', 'Polish', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (52, 'ps', 'Pashto', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (53, 'pt', 'Portuguese', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (54, 'qu', 'Quechua', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (55, 'ro', 'Romanian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (56, 'ru', 'Russian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (57, 'sa', 'Sanskrit', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (58, 'se', 'Sami (Northern)', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (59, 'sk', 'Slovak', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (60, 'sl', 'Slovenian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (61, 'sq', 'Albanian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (62, 'sv', 'Swedish', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (63, 'sw', 'Swahili', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (64, 'syr', 'Syriac', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (65, 'ta', 'Tamil', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (66, 'te', 'Telugu', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (67, 'th', 'Thai', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (68, 'tl', 'Tagalog', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (69, 'tn', 'Tswana', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (70, 'tr', 'Turkish', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (71, 'ts', 'Tsonga', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (72, 'tt', 'Tatar', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (73, 'uk', 'Ukrainian', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (74, 'ur', 'Urdu', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (75, 'uz', 'Uzbek (Latin)', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (76, 'vi', 'Vietnamese', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (77, 'xh', 'Xhosa', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (78, 'zh', 'Chinese', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (79, 'zu', 'Zulu', 99);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (13, 'en', 'English', 1);
INSERT INTO gen_language (gen_language, code, name, popular) VALUES (15, 'es', 'Spanish', 2);


--
-- Data for Name: gen_timezone; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO gen_timezone (gen_timezone, name) VALUES (1, 'Indian/Mauritius');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (2, 'Indian/Chagos');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (3, 'Indian/Mayotte');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (4, 'Indian/Christmas');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (5, 'Indian/Cocos');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (6, 'Indian/Maldives');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (7, 'Indian/Comoro');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (8, 'Indian/Reunion');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (9, 'Indian/Mahe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (10, 'Indian/Kerguelen');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (11, 'Indian/Antananarivo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (12, 'Atlantic/Faroe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (13, 'Atlantic/Canary');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (14, 'Atlantic/Stanley');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (15, 'Atlantic/Bermuda');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (16, 'Atlantic/South_Georgia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (17, 'Atlantic/St_Helena');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (18, 'Atlantic/Jan_Mayen');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (19, 'Atlantic/Faeroe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (20, 'Atlantic/Reykjavik');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (21, 'Atlantic/Cape_Verde');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (22, 'Atlantic/Azores');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (23, 'Atlantic/Madeira');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (24, 'CST6CDT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (25, 'Poland');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (26, 'US/Alaska');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (27, 'US/Pacific');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (28, 'US/Eastern');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (29, 'US/Michigan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (30, 'US/Arizona');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (31, 'US/Indiana-Starke');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (32, 'US/Aleutian');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (33, 'US/Pacific-New');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (34, 'US/Hawaii');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (35, 'US/East-Indiana');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (36, 'US/Central');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (37, 'US/Mountain');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (38, 'US/Samoa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (39, 'Kwajalein');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (40, 'Brazil/DeNoronha');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (41, 'Brazil/Acre');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (42, 'Brazil/East');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (43, 'Brazil/West');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (44, 'Pacific/Port_Moresby');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (45, 'Pacific/Chuuk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (46, 'Pacific/Easter');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (47, 'Pacific/Kwajalein');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (48, 'Pacific/Tongatapu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (49, 'Pacific/Yap');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (50, 'Pacific/Wallis');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (51, 'Pacific/Apia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (52, 'Pacific/Norfolk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (53, 'Pacific/Efate');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (54, 'Pacific/Fiji');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (55, 'Pacific/Funafuti');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (56, 'Pacific/Palau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (57, 'Pacific/Guam');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (58, 'Pacific/Saipan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (59, 'Pacific/Kosrae');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (60, 'Pacific/Niue');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (61, 'Pacific/Ponape');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (62, 'Pacific/Wake');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (63, 'Pacific/Galapagos');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (64, 'Pacific/Johnston');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (65, 'Pacific/Midway');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (66, 'Pacific/Nauru');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (67, 'Pacific/Guadalcanal');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (68, 'Pacific/Chatham');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (69, 'Pacific/Auckland');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (70, 'Pacific/Noumea');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (71, 'Pacific/Fakaofo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (72, 'Pacific/Tahiti');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (73, 'Pacific/Gambier');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (74, 'Pacific/Majuro');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (75, 'Pacific/Honolulu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (76, 'Pacific/Pohnpei');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (77, 'Pacific/Pago_Pago');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (78, 'Pacific/Truk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (79, 'Pacific/Pitcairn');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (80, 'Pacific/Marquesas');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (81, 'Pacific/Bougainville');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (82, 'Pacific/Tarawa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (83, 'Pacific/Rarotonga');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (84, 'Pacific/Samoa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (85, 'Pacific/Kiritimati');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (86, 'Pacific/Enderbury');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (87, 'MST');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (88, 'NZ');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (89, 'Arctic/Longyearbyen');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (90, 'Universal');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (91, 'Libya');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (92, 'Turkey');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (93, 'EST5EDT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (94, 'Greenwich');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (95, 'America/Puerto_Rico');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (96, 'America/Recife');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (97, 'America/Resolute');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (98, 'America/Manaus');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (99, 'America/New_York');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (100, 'America/Rankin_Inlet');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (101, 'America/Lima');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (102, 'America/St_Barthelemy');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (103, 'America/Santo_Domingo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (104, 'America/Detroit');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (105, 'America/Paramaribo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (106, 'America/Yakutat');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (107, 'America/Santarem');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (108, 'America/Punta_Arenas');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (109, 'America/Scoresbysund');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (110, 'America/Santiago');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (111, 'America/Guyana');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (112, 'America/Coral_Harbour');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (113, 'America/Rio_Branco');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (114, 'America/Porto_Acre');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (115, 'America/Nipigon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (116, 'America/Edmonton');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (117, 'America/Port_of_Spain');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (118, 'America/Lower_Princes');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (119, 'America/St_Thomas');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (120, 'America/Guatemala');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (121, 'America/Catamarca');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (122, 'America/Antigua');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (123, 'America/Porto_Velho');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (124, 'America/Rosario');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (125, 'America/Chicago');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (126, 'America/Creston');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (127, 'America/Managua');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (128, 'America/Nassau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (129, 'America/Bogota');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (130, 'America/Cancun');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (131, 'America/Chihuahua');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (132, 'America/Campo_Grande');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (133, 'America/Halifax');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (134, 'America/Boise');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (135, 'America/Montreal');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (136, 'America/Goose_Bay');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (137, 'America/Sao_Paulo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (138, 'America/Blanc-Sablon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (139, 'America/Phoenix');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (140, 'America/Atikokan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (141, 'America/Cayenne');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (142, 'America/Santa_Isabel');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (143, 'America/Boa_Vista');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (144, 'America/Bahia_Banderas');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (145, 'America/Indiana/Vevay');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (146, 'America/Indiana/Indianapolis');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (147, 'America/Indiana/Winamac');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (148, 'America/Indiana/Tell_City');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (149, 'America/Indiana/Petersburg');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (150, 'America/Indiana/Vincennes');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (151, 'America/Indiana/Knox');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (152, 'America/Indiana/Marengo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (153, 'America/Indianapolis');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (154, 'America/Dominica');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (155, 'America/Argentina/Salta');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (156, 'America/Argentina/Ushuaia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (157, 'America/Argentina/Catamarca');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (158, 'America/Argentina/ComodRivadavia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (159, 'America/Argentina/San_Juan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (160, 'America/Argentina/San_Luis');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (161, 'America/Argentina/Rio_Gallegos');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (162, 'America/Argentina/Jujuy');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (163, 'America/Argentina/Tucuman');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (164, 'America/Argentina/Buenos_Aires');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (165, 'America/Argentina/Cordoba');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (166, 'America/Argentina/La_Rioja');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (167, 'America/Argentina/Mendoza');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (168, 'America/La_Paz');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (169, 'America/Dawson');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (170, 'America/Moncton');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (171, 'America/Matamoros');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (172, 'America/St_Vincent');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (173, 'America/Regina');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (174, 'America/Yellowknife');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (175, 'America/Rainy_River');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (176, 'America/Kralendijk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (177, 'America/Monterrey');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (178, 'America/Jamaica');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (179, 'America/Havana');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (180, 'America/Tegucigalpa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (181, 'America/Guayaquil');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (182, 'America/Metlakatla');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (183, 'America/Mazatlan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (184, 'America/Belize');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (185, 'America/Knox_IN');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (186, 'America/Cuiaba');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (187, 'America/Merida');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (188, 'America/Jujuy');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (189, 'America/Cayman');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (190, 'America/Belem');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (191, 'America/Eirunepe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (192, 'America/St_Lucia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (193, 'America/Bahia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (194, 'America/Whitehorse');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (195, 'America/Tortola');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (196, 'America/Vancouver');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (197, 'America/Inuvik');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (198, 'America/Port-au-Prince');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (199, 'America/Fortaleza');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (200, 'America/Noronha');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (201, 'America/Buenos_Aires');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (202, 'America/Los_Angeles');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (203, 'America/El_Salvador');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (204, 'America/Denver');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (205, 'America/Fort_Wayne');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (206, 'America/Kentucky/Louisville');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (207, 'America/Kentucky/Monticello');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (208, 'America/North_Dakota/New_Salem');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (209, 'America/North_Dakota/Center');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (210, 'America/North_Dakota/Beulah');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (211, 'America/Glace_Bay');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (212, 'America/Montserrat');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (213, 'America/Toronto');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (214, 'America/Panama');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (215, 'America/Cordoba');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (216, 'America/Louisville');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (217, 'America/Ensenada');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (218, 'America/Shiprock');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (219, 'America/Ojinaga');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (220, 'America/Thule');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (221, 'America/Caracas');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (222, 'America/Araguaina');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (223, 'America/Cambridge_Bay');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (224, 'America/Winnipeg');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (225, 'America/Grand_Turk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (226, 'America/Virgin');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (227, 'America/Anchorage');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (228, 'America/Costa_Rica');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (229, 'America/Nome');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (230, 'America/Grenada');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (231, 'America/St_Johns');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (232, 'America/Atka');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (233, 'America/Asuncion');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (234, 'America/Hermosillo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (235, 'America/Tijuana');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (236, 'America/Marigot');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (237, 'America/Juneau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (238, 'America/Montevideo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (239, 'America/Godthab');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (240, 'America/Guadeloupe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (241, 'America/Maceio');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (242, 'America/Pangnirtung');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (243, 'America/St_Kitts');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (244, 'America/Barbados');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (245, 'America/Iqaluit');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (246, 'America/Menominee');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (247, 'America/Martinique');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (248, 'America/Mexico_City');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (249, 'America/Swift_Current');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (250, 'America/Miquelon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (251, 'America/Curacao');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (252, 'America/Dawson_Creek');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (253, 'America/Mendoza');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (254, 'America/Adak');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (255, 'America/Thunder_Bay');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (256, 'America/Aruba');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (257, 'America/Fort_Nelson');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (258, 'America/Sitka');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (259, 'America/Anguilla');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (260, 'America/Danmarkshavn');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (261, 'Australia/Melbourne');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (262, 'Australia/Queensland');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (263, 'Australia/North');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (264, 'Australia/Lord_Howe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (265, 'Australia/Adelaide');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (266, 'Australia/Yancowinna');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (267, 'Australia/Victoria');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (268, 'Australia/Canberra');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (269, 'Australia/Sydney');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (270, 'Australia/ACT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (271, 'Australia/Eucla');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (272, 'Australia/Brisbane');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (273, 'Australia/Tasmania');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (274, 'Australia/Hobart');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (275, 'Australia/Perth');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (276, 'Australia/South');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (277, 'Australia/Lindeman');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (278, 'Australia/Darwin');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (279, 'Australia/West');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (280, 'Australia/LHI');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (281, 'Australia/NSW');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (282, 'Australia/Broken_Hill');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (283, 'Australia/Currie');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (284, 'Etc/GMT-10');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (285, 'Etc/GMT+12');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (286, 'Etc/GMT-11');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (287, 'Etc/Universal');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (288, 'Etc/Greenwich');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (289, 'Etc/GMT-6');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (290, 'Etc/GMT-1');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (291, 'Etc/GMT-8');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (292, 'Etc/GMT+4');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (293, 'Etc/GMT+3');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (294, 'Etc/GMT-9');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (295, 'Etc/GMT-0');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (296, 'Etc/GMT-7');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (297, 'Etc/GMT+2');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (298, 'Etc/GMT+5');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (299, 'Etc/GMT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (300, 'Etc/Zulu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (301, 'Etc/GMT+11');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (302, 'Etc/GMT-13');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (303, 'Etc/GMT-14');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (304, 'Etc/GMT+10');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (305, 'Etc/GMT-12');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (306, 'Etc/GMT0');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (307, 'Etc/UCT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (308, 'Etc/GMT+0');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (309, 'Etc/GMT+7');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (310, 'Etc/GMT+9');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (311, 'Etc/GMT-2');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (312, 'Etc/GMT-5');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (313, 'Etc/GMT+8');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (314, 'Etc/GMT+6');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (315, 'Etc/GMT+1');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (316, 'Etc/UTC');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (317, 'Etc/GMT-4');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (318, 'Etc/GMT-3');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (319, 'NZ-CHAT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (320, 'Asia/Dushanbe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (321, 'Asia/Calcutta');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (322, 'Asia/Urumqi');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (323, 'Asia/Karachi');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (324, 'Asia/Khandyga');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (325, 'Asia/Thimbu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (326, 'Asia/Thimphu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (327, 'Asia/Vladivostok');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (328, 'Asia/Vientiane');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (329, 'Asia/Shanghai');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (330, 'Asia/Ulan_Bator');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (331, 'Asia/Aden');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (332, 'Asia/Muscat');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (333, 'Asia/Damascus');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (334, 'Asia/Jerusalem');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (335, 'Asia/Brunei');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (336, 'Asia/Ulaanbaatar');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (337, 'Asia/Amman');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (338, 'Asia/Kuching');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (339, 'Asia/Tel_Aviv');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (340, 'Asia/Seoul');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (341, 'Asia/Atyrau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (342, 'Asia/Pyongyang');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (343, 'Asia/Hovd');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (344, 'Asia/Hebron');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (345, 'Asia/Kuwait');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (346, 'Asia/Tomsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (347, 'Asia/Manila');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (348, 'Asia/Chita');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (349, 'Asia/Katmandu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (350, 'Asia/Gaza');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (351, 'Asia/Samarkand');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (352, 'Asia/Taipei');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (353, 'Asia/Tashkent');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (354, 'Asia/Yekaterinburg');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (355, 'Asia/Macau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (356, 'Asia/Qyzylorda');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (357, 'Asia/Macao');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (358, 'Asia/Tokyo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (359, 'Asia/Baku');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (360, 'Asia/Barnaul');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (361, 'Asia/Istanbul');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (362, 'Asia/Irkutsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (363, 'Asia/Qatar');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (364, 'Asia/Bahrain');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (365, 'Asia/Yangon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (366, 'Asia/Yerevan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (367, 'Asia/Almaty');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (368, 'Asia/Dili');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (369, 'Asia/Dacca');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (370, 'Asia/Chongqing');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (371, 'Asia/Ust-Nera');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (372, 'Asia/Magadan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (373, 'Asia/Colombo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (374, 'Asia/Krasnoyarsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (375, 'Asia/Kamchatka');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (376, 'Asia/Ujung_Pandang');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (377, 'Asia/Jakarta');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (378, 'Asia/Kolkata');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (379, 'Asia/Kabul');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (380, 'Asia/Oral');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (381, 'Asia/Jayapura');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (382, 'Asia/Pontianak');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (383, 'Asia/Makassar');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (384, 'Asia/Tbilisi');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (385, 'Asia/Singapore');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (386, 'Asia/Harbin');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (387, 'Asia/Kashgar');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (388, 'Asia/Dhaka');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (389, 'Asia/Yakutsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (390, 'Asia/Kuala_Lumpur');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (391, 'Asia/Tehran');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (392, 'Asia/Beirut');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (393, 'Asia/Aqtobe');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (394, 'Asia/Anadyr');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (395, 'Asia/Bishkek');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (396, 'Asia/Dubai');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (397, 'Asia/Riyadh');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (398, 'Asia/Novokuznetsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (399, 'Asia/Aqtau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (400, 'Asia/Omsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (401, 'Asia/Ashkhabad');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (402, 'Asia/Saigon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (403, 'Asia/Sakhalin');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (404, 'Asia/Hong_Kong');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (405, 'Asia/Phnom_Penh');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (406, 'Asia/Nicosia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (407, 'Asia/Baghdad');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (408, 'Asia/Srednekolymsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (409, 'Asia/Ashgabat');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (410, 'Asia/Kathmandu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (411, 'Asia/Choibalsan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (412, 'Asia/Bangkok');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (413, 'Asia/Chungking');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (414, 'Asia/Novosibirsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (415, 'Asia/Famagusta');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (416, 'Asia/Rangoon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (417, 'Asia/Ho_Chi_Minh');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (418, 'MET');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (419, 'Portugal');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (420, 'Antarctica/Palmer');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (421, 'Antarctica/Davis');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (422, 'Antarctica/Rothera');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (423, 'Antarctica/Vostok');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (424, 'Antarctica/Syowa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (425, 'Antarctica/DumontDUrville');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (426, 'Antarctica/McMurdo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (427, 'Antarctica/Macquarie');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (428, 'Antarctica/South_Pole');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (429, 'Antarctica/Troll');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (430, 'Antarctica/Mawson');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (431, 'Antarctica/Casey');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (432, 'GMT-0');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (433, 'CET');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (434, 'Eire');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (435, 'PST8PDT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (436, 'Jamaica');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (437, 'GMT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (438, 'Zulu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (439, 'Japan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (440, 'ROC');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (441, 'GB-Eire');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (442, 'Europe/Zurich');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (443, 'Europe/Paris');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (444, 'Europe/Moscow');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (445, 'Europe/Luxembourg');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (446, 'Europe/Ljubljana');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (447, 'Europe/Helsinki');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (448, 'Europe/Minsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (449, 'Europe/Skopje');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (450, 'Europe/Dublin');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (451, 'Europe/Jersey');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (452, 'Europe/San_Marino');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (453, 'Europe/Gibraltar');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (454, 'Europe/Belgrade');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (455, 'Europe/Guernsey');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (456, 'Europe/Ulyanovsk');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (457, 'Europe/Saratov');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (458, 'Europe/Vaduz');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (459, 'Europe/Istanbul');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (460, 'Europe/Lisbon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (461, 'Europe/Uzhgorod');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (462, 'Europe/Kirov');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (463, 'Europe/Tirane');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (464, 'Europe/Tiraspol');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (465, 'Europe/Sarajevo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (466, 'Europe/Madrid');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (467, 'Europe/Podgorica');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (468, 'Europe/Busingen');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (469, 'Europe/Vatican');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (470, 'Europe/Belfast');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (471, 'Europe/Bratislava');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (472, 'Europe/Kiev');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (473, 'Europe/Kaliningrad');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (474, 'Europe/Zaporozhye');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (475, 'Europe/Vienna');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (476, 'Europe/Budapest');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (477, 'Europe/Vilnius');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (478, 'Europe/Monaco');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (479, 'Europe/Oslo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (480, 'Europe/Astrakhan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (481, 'Europe/Simferopol');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (482, 'Europe/Volgograd');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (483, 'Europe/Isle_of_Man');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (484, 'Europe/London');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (485, 'Europe/Riga');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (486, 'Europe/Andorra');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (487, 'Europe/Prague');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (488, 'Europe/Berlin');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (489, 'Europe/Tallinn');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (490, 'Europe/Rome');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (491, 'Europe/Malta');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (492, 'Europe/Zagreb');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (493, 'Europe/Amsterdam');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (494, 'Europe/Nicosia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (495, 'Europe/Bucharest');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (496, 'Europe/Copenhagen');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (497, 'Europe/Chisinau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (498, 'Europe/Mariehamn');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (499, 'Europe/Sofia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (500, 'Europe/Athens');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (501, 'Europe/Stockholm');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (502, 'Europe/Samara');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (503, 'Europe/Brussels');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (504, 'Europe/Warsaw');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (505, 'ROK');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (506, 'Navajo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (507, 'Singapore');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (508, 'posixrules');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (509, 'GB');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (510, 'Mexico/BajaNorte');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (511, 'Mexico/General');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (512, 'Mexico/BajaSur');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (513, 'EST');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (514, 'GMT0');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (515, 'Hongkong');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (516, 'PRC');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (517, 'Iran');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (518, 'MST7MDT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (519, 'WET');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (520, 'W-SU');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (521, 'UCT');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (522, 'Cuba');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (523, 'Egypt');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (524, 'GMT+0');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (525, 'EET');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (526, 'Israel');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (527, 'Africa/Sao_Tome');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (528, 'Africa/Conakry');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (529, 'Africa/Dakar');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (530, 'Africa/Ndjamena');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (531, 'Africa/Casablanca');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (532, 'Africa/Lome');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (533, 'Africa/Algiers');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (534, 'Africa/Mogadishu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (535, 'Africa/Lagos');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (536, 'Africa/Brazzaville');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (537, 'Africa/Timbuktu');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (538, 'Africa/Nouakchott');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (539, 'Africa/Maseru');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (540, 'Africa/Libreville');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (541, 'Africa/Harare');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (542, 'Africa/Malabo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (543, 'Africa/Bangui');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (544, 'Africa/Nairobi');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (545, 'Africa/Kinshasa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (546, 'Africa/Porto-Novo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (547, 'Africa/Cairo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (548, 'Africa/Douala');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (549, 'Africa/Juba');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (550, 'Africa/Gaborone');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (551, 'Africa/Tunis');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (552, 'Africa/Kampala');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (553, 'Africa/Mbabane');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (554, 'Africa/Addis_Ababa');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (555, 'Africa/Maputo');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (556, 'Africa/Bissau');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (557, 'Africa/Blantyre');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (558, 'Africa/Niamey');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (559, 'Africa/Banjul');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (560, 'Africa/Abidjan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (561, 'Africa/Asmara');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (562, 'Africa/Bamako');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (563, 'Africa/Ouagadougou');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (564, 'Africa/Lusaka');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (565, 'Africa/Luanda');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (566, 'Africa/Asmera');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (567, 'Africa/Lubumbashi');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (568, 'Africa/Accra');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (569, 'Africa/Khartoum');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (570, 'Africa/Ceuta');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (571, 'Africa/Bujumbura');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (572, 'Africa/Windhoek');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (573, 'Africa/El_Aaiun');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (574, 'Africa/Tripoli');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (575, 'Africa/Monrovia');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (576, 'Africa/Dar_es_Salaam');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (577, 'Africa/Johannesburg');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (578, 'Africa/Kigali');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (579, 'Africa/Djibouti');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (580, 'Africa/Freetown');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (581, 'UTC');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (582, 'Chile/EasterIsland');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (583, 'Chile/Continental');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (584, 'HST');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (585, 'Canada/Atlantic');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (586, 'Canada/Pacific');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (587, 'Canada/Eastern');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (588, 'Canada/Yukon');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (589, 'Canada/Saskatchewan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (590, 'Canada/Newfoundland');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (591, 'Canada/East-Saskatchewan');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (592, 'Canada/Central');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (593, 'Canada/Mountain');
INSERT INTO gen_timezone (gen_timezone, name) VALUES (594, 'Iceland');


--
-- Name: auth_role ak_auth_role; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_role
    ADD CONSTRAINT ak_auth_role UNIQUE (name);


--
-- Name: auth_scope ak_auth_scope; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_scope
    ADD CONSTRAINT ak_auth_scope UNIQUE (name);


--
-- Name: auth_api pk_auth_api; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_api
    ADD CONSTRAINT pk_auth_api PRIMARY KEY (auth_api);


--
-- Name: auth_application pk_auth_application; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_application
    ADD CONSTRAINT pk_auth_application PRIMARY KEY (auth_application);


--
-- Name: auth_application_scope pk_auth_application_scope; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_application_scope
    ADD CONSTRAINT pk_auth_application_scope PRIMARY KEY (auth_application, auth_scope);


--
-- Name: auth_parameter pk_auth_parameter; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_parameter
    ADD CONSTRAINT pk_auth_parameter PRIMARY KEY (auth_parameter);


--
-- Name: auth_plataform pk_auth_plataform; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_plataform
    ADD CONSTRAINT pk_auth_plataform PRIMARY KEY (auth_plataform);


--
-- Name: auth_role pk_auth_role; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_role
    ADD CONSTRAINT pk_auth_role PRIMARY KEY (auth_role);


--
-- Name: auth_role_scope pk_auth_role_scope; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_role_scope
    ADD CONSTRAINT pk_auth_role_scope PRIMARY KEY (auth_role, auth_scope);


--
-- Name: auth_scope pk_auth_scope; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_scope
    ADD CONSTRAINT pk_auth_scope PRIMARY KEY (auth_scope);


--
-- Name: auth_user pk_auth_user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT pk_auth_user PRIMARY KEY (auth_user);


--
-- Name: auth_user_role pk_auth_user_role; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_user_role
    ADD CONSTRAINT pk_auth_user_role PRIMARY KEY (auth_user, auth_role);


--
-- Name: gen_country pk_gen_country; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY gen_country
    ADD CONSTRAINT pk_gen_country PRIMARY KEY (gen_country);


--
-- Name: gen_language pk_gen_language; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY gen_language
    ADD CONSTRAINT pk_gen_language PRIMARY KEY (gen_language);


--
-- Name: gen_timezone pk_gen_timezone; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY gen_timezone
    ADD CONSTRAINT pk_gen_timezone PRIMARY KEY (gen_timezone);


--
-- Name: idx_auth_scope_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_auth_scope_name ON auth_scope USING btree (lower((name)::text));


--
-- Name: idx_auth_user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_auth_user_email ON auth_user USING btree (lower((email)::text));


--
-- Name: auth_application_scope fk_auth_appscope_ref_application; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_application_scope
    ADD CONSTRAINT fk_auth_appscope_ref_application FOREIGN KEY (auth_application) REFERENCES auth_application(auth_application) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_application_scope fk_auth_appscope_ref_scope; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_application_scope
    ADD CONSTRAINT fk_auth_appscope_ref_scope FOREIGN KEY (auth_scope) REFERENCES auth_scope(auth_scope) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_role_scope fk_auth_rolescope_ref_role; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_role_scope
    ADD CONSTRAINT fk_auth_rolescope_ref_role FOREIGN KEY (auth_role) REFERENCES auth_role(auth_role) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_role_scope fk_auth_rolescope_ref_scope; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_role_scope
    ADD CONSTRAINT fk_auth_rolescope_ref_scope FOREIGN KEY (auth_scope) REFERENCES auth_scope(auth_scope) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_user fk_auth_user_ref_language; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT fk_auth_user_ref_language FOREIGN KEY (gen_language) REFERENCES gen_language(gen_language) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_user fk_auth_user_ref_timezone; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_user
    ADD CONSTRAINT fk_auth_user_ref_timezone FOREIGN KEY (gen_timezone) REFERENCES gen_timezone(gen_timezone) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_user_role fk_auth_userrole_ref_role; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_user_role
    ADD CONSTRAINT fk_auth_userrole_ref_role FOREIGN KEY (auth_role) REFERENCES auth_role(auth_role) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- Name: auth_user_role fk_auth_userrole_ref_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY auth_user_role
    ADD CONSTRAINT fk_auth_userrole_ref_user FOREIGN KEY (auth_user) REFERENCES auth_user(auth_user) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

