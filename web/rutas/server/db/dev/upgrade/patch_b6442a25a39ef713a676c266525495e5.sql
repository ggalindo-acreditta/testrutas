CREATE TYPE "user_type" AS ENUM (
  'LEADER',
  'COLLABORATOR'
);

CREATE TYPE "user_status" AS ENUM (
  'REGISTERED',
  'ACTIVE',
  'INVITED'
);

CREATE TYPE "materiality" AS ENUM (
  'KNOWLEDGE',
  'SKILL',
  'EXCELLENCE',
  'CERTIFICATION',
  'EXPERTISE',
  'MEMBERSHIP',
  'PARTICIPATION'
);

CREATE TYPE "difficulty" AS ENUM (
  'EASY',
  'MEDIUM',
  'HARD'
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,
  "password" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "type" user_type NOT NULL,
  "status" user_status NOT NULL,
  "organization_id" int,
  "terms_accepted" boolean NOT NULL,
  "registration_code" varchar
);

CREATE TABLE "organizations" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "domain" varchar NOT NULL,
  "description" varchar,
  "token" varchar NOT NULL,
  "photo_url" varchar NOT NULL
);

CREATE TABLE "elements" (
  "id" int PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL,
  "issuer" varchar,
  "issuer_url" varchar,
  "category" varchar,
  "duration" int,
  "description" varchar,
  "skills" varchar,
  "tags" varchar,
  "criterion" varchar,
  "materiality" materiality,
  "score" int NOT NULL,
  "image_url" varchar NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "expire_at" timestamp,
  "language" varchar NOT NULL,
  "badge_id" varchar,
  "organization_id" int
);

CREATE TABLE "paths" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "skills" varchar,
  "tags" varchar,
  "criterion" varchar,
  "materiality" materiality,
  "difficulty" difficulty,
  "image_url" varchar NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "expire_at" timestamp,
  "score" int NOT NULL,
  "language" varchar NOT NULL,
  "element_tree_id" int,
  "organization_id" int
);

CREATE TABLE "element_tree" (
  "id" int PRIMARY KEY,
  "parent_id" int,
  "element_id" int
);

ALTER TABLE "users" ADD FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id");
ALTER TABLE "elements" ADD FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id");
ALTER TABLE "paths" ADD FOREIGN KEY ("element_tree_id") REFERENCES "element_tree" ("id");
ALTER TABLE "paths" ADD FOREIGN KEY ("organization_id") REFERENCES "organizations" ("id");
ALTER TABLE "element_tree" ADD FOREIGN KEY ("parent_id") REFERENCES "element_tree" ("id");
ALTER TABLE "element_tree" ADD FOREIGN KEY ("element_id") REFERENCES "elements" ("id");

-- FUNCTION: public.uuid_generate_v1()
-- DROP FUNCTION public.uuid_generate_v1();
CREATE OR REPLACE FUNCTION public.uuid_generate_v1(
	)
    RETURNS uuid
    LANGUAGE 'c'

    COST 1
    VOLATILE STRICT 
AS '$libdir/uuid-ossp', 'uuid_generate_v1';
ALTER FUNCTION public.uuid_generate_v1() OWNER TO postgres;

-- FUNCTION: public.uf_genuuid(character varying)
-- DROP FUNCTION public.uf_genuuid(character varying);
CREATE OR REPLACE FUNCTION public.uf_genuuid(
	prm_name character varying)
    RETURNS uuid
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

begin
return uuid_generate_v1();
end 
$BODY$;
ALTER FUNCTION public.uf_genuuid(character varying) OWNER TO postgres;

----------------------------------------------------------
----------------------------------------------------------
CREATE TABLE public.msg_type
(
    msg_type smallint NOT NULL,
    description character varying(20) COLLATE pg_catalog."default",
    max_tries smallint NOT NULL DEFAULT 100,
    status boolean NOT NULL DEFAULT true
);
ALTER TABLE public.msg_type ADD CONSTRAINT msg_type_pkey PRIMARY KEY (msg_type);
insert into public.msg_type values(1,'Email',5,true);

CREATE TABLE public.msg_priority
(
    msg_priority smallint NOT NULL,
    description character varying(20) COLLATE pg_catalog."default" NOT NULL
);
ALTER TABLE public.msg_priority ADD CONSTRAINT msg_priority_pkey PRIMARY KEY (msg_priority);
insert into public.msg_priority values(1,'High');

CREATE TABLE public.msg_carrier
(
    msg_carrier character varying(50) COLLATE pg_catalog."default" NOT NULL,
    msg_type smallint NOT NULL,
    counter smallint NOT NULL DEFAULT 0,
    max_counter smallint NOT NULL DEFAULT 400,
    update_date timestamp without time zone NOT NULL DEFAULT now(),
    status boolean NOT NULL DEFAULT true
);
ALTER TABLE public.msg_carrier ADD CONSTRAINT msg_carrier_pkey PRIMARY KEY (msg_carrier);

CREATE TABLE public.msg(
    msg uuid not null default uf_genuuid('seq_msg'),
    msg_type smallint not null,
    msg_priority smallint not null,
    created_date timestamp not null,
    last_attempt_date timestamp null,
    tries smallint not null default 0,
    max_tries smallint not null default 100,
    errortext varchar(500) null,
    address varchar (200) not null,
    subject varchar (100) not null,
    template varchar (20) not null,
    data json not null
);
ALTER TABLE public.msg ADD CONSTRAINT msg_msg_priority_fkey FOREIGN KEY (msg_priority)
        REFERENCES public.msg_priority (msg_priority) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;
ALTER TABLE public.msg ADD CONSTRAINT msg_msg_type_fkey FOREIGN KEY (msg_type)
        REFERENCES public.msg_type (msg_type) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;
ALTER TABLE public.msg ADD CONSTRAINT msg_pkey PRIMARY KEY (msg);

CREATE TABLE public.msg_queue
(
    msg uuid NOT NULL,
    msg_carrier character varying(50) COLLATE pg_catalog."default" NOT NULL,
    queue_date timestamp without time zone NOT NULL DEFAULT now()
);
ALTER TABLE public.msg_queue ADD CONSTRAINT msg_queue_msg_fkey FOREIGN KEY (msg)
        REFERENCES public.msg (msg) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;
ALTER TABLE public.msg_queue ADD CONSTRAINT msg_queue_pkey PRIMARY KEY (msg);

CREATE TABLE public.msg_sent
(
    msg uuid NOT NULL,
    msg_type smallint NOT NULL,
    msg_carrier character varying(50) COLLATE pg_catalog."default" NOT NULL,
    msg_priority smallint NOT NULL,
    created_date timestamp without time zone NOT NULL,
    sent_date timestamp without time zone,
    tries smallint NOT NULL DEFAULT 0,
    max_tries smallint NOT NULL DEFAULT 100,
    address character varying(50) COLLATE pg_catalog."default" NOT NULL,
    subject character varying(100) COLLATE pg_catalog."default" NOT NULL,
    template character varying(20) COLLATE pg_catalog."default" NOT NULL,
    data json NOT NULL
);
ALTER TABLE public.msg_sent ADD CONSTRAINT msg_sent_msg_priority_fkey FOREIGN KEY (msg_priority)
        REFERENCES public.msg_priority (msg_priority) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;
ALTER TABLE public.msg_sent ADD CONSTRAINT msg_sent_msg_type_fkey FOREIGN KEY (msg_type)
        REFERENCES public.msg_type (msg_type) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;
ALTER TABLE public.msg_sent ADD CONSTRAINT msg_sent_pkey PRIMARY KEY (msg);

CREATE TABLE public.msg_failed
(
    msg uuid NOT NULL,
    msg_type smallint NOT NULL,
    msg_carrier character varying(50) COLLATE pg_catalog."default" NOT NULL,
    msg_priority smallint NOT NULL,
    created_date timestamp without time zone NOT NULL,
    last_attempt_date timestamp without time zone,
    tries smallint NOT NULL DEFAULT 0,
    max_tries smallint NOT NULL DEFAULT 100,
    errortext character varying(500) COLLATE pg_catalog."default",
    address character varying(50) COLLATE pg_catalog."default" NOT NULL,
    subject character varying(100) COLLATE pg_catalog."default" NOT NULL,
    template character varying(20) COLLATE pg_catalog."default" NOT NULL,
    data json NOT NULL
);
ALTER TABLE public.msg_failed ADD CONSTRAINT msg_failed_msg_priority_fkey FOREIGN KEY (msg_priority)
        REFERENCES public.msg_priority (msg_priority) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;
ALTER TABLE public.msg_failed ADD CONSTRAINT msg_failed_pkey PRIMARY KEY (msg);

----------------------------------------------------------
----------------------------------------------------------
-- FUNCTION: public.uf_user_register(character varying, character varying, character varying, character varying, character varying)
-- DROP FUNCTION public.uf_user_register(character varying, character varying, character varying, character varying, character varying);
CREATE OR REPLACE FUNCTION public.uf_user_register(
	prm_email character varying,
	prm_password character varying,
	prm_name character varying,
	prm_lastname character varying,
	prm_registration_code character varying)
    RETURNS TABLE(userid integer, email character varying, error character varying, token character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
	var_id integer;
	var_token varchar;
	var_error varchar(5);
	var_email varchar(50);
BEGIN
	-- ERRORES
	-- AC001: Usuario ya esta registrado
	-- AC010: Email no existe en las solicitudes
	var_token := '';
	select users.email into var_email  
      from users 
     where users.email = lower(prm_email);
	if var_email is not null then
		var_email := '';
		var_error := 'AC001';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
	end if;
    
    INSERT INTO public.users(id, firstname, lastname, password, email, type, status, terms_accepted, registration_code)
    SELECT coalesce((select max(id) from public.users),0)+1, prm_name, prm_lastname, prm_password, prm_email, 'LEADER', 'REGISTERED', true, prm_registration_code;
    
    SELECT id into var_id
      FROM public.users as x
     WHERE lower(x.email) = lower(prm_email);
     
    IF var_id is null THEN
		var_error := 'AC001';
		return query select 0 as userid, prm_email as email, var_error as error, var_token as token;
		return;
    END IF;
        
	var_error := '';
	return query SELECT var_id as userid, prm_email as email, var_error as error, var_token as token;
	return;
END
$BODY$;
ALTER FUNCTION public.uf_user_register(character varying, character varying, character varying, character varying, character varying)
    OWNER TO postgres;

-- FUNCTION: public.uf_user_auth(character varying)
-- DROP FUNCTION public.uf_user_auth(character varying);
CREATE OR REPLACE FUNCTION public.uf_user_auth(
	prm_email character varying)
    RETURNS TABLE(email character varying, userid integer, error character varying, password character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$

DECLARE
	var_user integer;
	var_email varchar(50);
	var_data_auth users%ROWTYPE;
	var_error varchar(5);
	var_password varchar;
BEGIN
	-- ERRORES:
	-- U0001: Usuario no encontrado
 
	select * into var_data_auth 
      from public.users as u 
     where u.email = lower(prm_email);
	if not found then
		var_email := '';
		var_user := null;
		var_error := 'U0001';
		var_password := '';
		return query select var_email as email, 0 as userid, var_error as error, var_password as password;
		return;
    else 
    	if var_data_auth.status != 'ACTIVE' then
            var_email := '';
            var_user := null;
            var_error := 'U0005';
            var_password := '';
            return query select var_email as email, 0 as userid, var_error as error, var_password as password;
            return;
        else
            var_error := '';
            var_email := lower(prm_email);
            var_user := var_data_auth.id;
            var_password := var_data_auth.password;
            return query select var_email as email, var_user as userid, var_error as error, var_data_auth.password as password;
            return;
    	end if;
	end if;
END
$BODY$;
ALTER FUNCTION public.uf_user_auth(character varying)
    OWNER TO postgres;

-- FUNCTION: public.uf_user_confirm(character varying)
-- DROP FUNCTION public.uf_user_confirm(character varying);
CREATE OR REPLACE FUNCTION public.uf_user_confirm(
	prm_registration_code character varying)
    RETURNS TABLE(email character varying, userid integer, firstname character varying, lastname character varying, password character varying, error character varying) 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
AS $BODY$

DECLARE
	var_user integer;
	var_email varchar(50);
	var_data_auth users%ROWTYPE;
	var_error varchar(5);
	var_password varchar;
    var_null varchar;
BEGIN
	-- ERRORES:
	-- U0001: Usuario no encontrado
	var_null := '';
	var_error := '';
 
	select * into var_data_auth 
      from public.users as u 
     where u.registration_code = prm_registration_code;
	if not found then
		var_email := '';
		var_user := null;
		var_error := 'U0001';
		var_password := '';
		return query select var_email as email, 0 as userid, var_null as firstname, var_null as lastname, var_null as password, var_error as error;
		return;
    else 
    	if var_data_auth.status = 'ACTIVE' then
            var_email := '';
            var_user := null;
            var_error := 'U0012';
            var_password := '';
            return query select var_null as email, 0 as userid, var_null as firstname, var_null as lastname, var_null as password, var_error as error;
            return;
        else
            var_error := '';
            var_user := var_data_auth.id;
            var_email := var_data_auth.email;
            var_password := var_data_auth.password;
            
            UPDATE public.users
               SET status = 'ACTIVE'
             WHERE id = var_data_auth.id;
            return query select var_email as email, var_user as userid, var_data_auth.firstname, var_data_auth.lastname, var_data_auth.password as password, var_error as error;
            return;
    	end if;
	end if;
END
$BODY$;
ALTER FUNCTION public.uf_user_confirm(character varying)
    OWNER TO postgres;

-- FUNCTION: public.uf_msg_carrier_add(character varying, smallint, smallint)
-- DROP FUNCTION public.uf_msg_carrier_add(character varying, smallint, smallint);
CREATE OR REPLACE FUNCTION public.uf_msg_carrier_add(
	prm_carrier character varying,
	prm_type smallint,
	prm_max smallint,
	OUT prm_error character varying)
    RETURNS character varying
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
  var_error varchar(5);
  var_carrierName varchar(50);
  var_carrierId varchar(50);
BEGIN
  -- Errores:
  -- Hasta ahora no se manejan codigos de error

  var_error := '';
  var_carrierName := trim(coalesce(prm_carrier, ''));

  var_carrierId = coalesce((select msg_carrier from msg_carrier where msg_carrier = var_carrierName), null);
  if var_carrierId is null then
  /* hay que registrarlo */
  insert into msg_carrier (
    msg_carrier, msg_type, counter,
    max_counter, update_date, status
  ) values (
    var_carrierName, prm_type, 0,
    prm_max, now(), true
  );
  else
    update msg_carrier
    set status = true,
    update_date = (case when cast(update_date as date) < cast(now() as date) then now() else update_date end),
    counter = (case when cast(update_date as date) < cast(now() as date) then 0 else counter end)
    where msg_carrier = var_carrierId;
  end if;

  prm_error := var_error;
  return;
END;
$BODY$;
ALTER FUNCTION public.uf_msg_carrier_add(character varying, smallint, smallint)
    OWNER TO postgres;

-- FUNCTION: public.uf_msg_add(smallint, smallint, uuid, character varying, character varying, character varying, json)
-- DROP FUNCTION public.uf_msg_add(smallint, smallint, uuid, character varying, character varying, character varying, json);
CREATE OR REPLACE FUNCTION public.uf_msg_add(
	prm_type smallint,
	prm_priority smallint,
	prm_user uuid,
	prm_address character varying,
	prm_subject character varying,
	prm_template character varying,
	prm_data json,
	OUT prm_error character varying)
    RETURNS character varying
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
  var_error varchar(5);
  var_address varchar (200);
BEGIN
  -- Errores:
  -- M0001: No se ha indicado una direccion de correo
  -- M0002: No se ha indicado un numero telefonico

  -- Si prm_usuario es no nulo, entonces se busca el email asociado al usuario, y prm_address se ignora

  var_error := '';
  var_address := trim(coalesce(prm_address, ''));
  if prm_user is not null then
    var_address := coalesce((select trim(email) from auth_user where auth_user = prm_user), null);
    if var_address is null then
        var_address := trim(coalesce(prm_address, ''));
    end if;
  end if;

  if trim(coalesce(var_address, '')) = '' then
    prm_error := 'M0001';
    return;
  end if;

  if var_address = 'admin' then
    -- para admin no se envia correo
    prm_error := '';
    return;
  end if;

  insert into public.msg(
    msg_type,
    msg_priority,
    created_date,
    max_tries,
    address,
    subject,
    template,
    data
  )
  values (
    prm_type,
    prm_priority,
    now(),
    (SELECT max_tries from msg_type where msg_type = prm_type),
    var_address,
    prm_subject,
    prm_template,
    prm_data
  );

  prm_error = '';
  return;
END;
$BODY$;
ALTER FUNCTION public.uf_msg_add(smallint, smallint, uuid, character varying, character varying, character varying, json)
    OWNER TO postgres;

-- FUNCTION: public.uf_msg_purge_queue(smallint)
-- DROP FUNCTION public.uf_msg_purge_queue(smallint);
CREATE OR REPLACE FUNCTION public.uf_msg_purge_queue(
	prm_type smallint)
    RETURNS integer
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$

DECLARE
  var_error varchar(5);
  var_carrierName varchar(50);
  var_carrierId varchar(50);
BEGIN
  -- Errores:
  -- Hasta ahora no se manejan codigos de error

  -- Mensajes fallidos:
  --  Superan la cantidad de intentos permitidos
  --  Tiempo en cola mayor a 24 horas
  INSERT INTO msg_failed (
    msg, msg_type, msg_carrier, msg_priority, created_date,
    last_attempt_date, tries, max_tries, errortext, address, subject, template, data
  )
  select
    m.msg, m.msg_type, mc.msg_carrier, m.msg_priority, m.created_date,
    m.last_attempt_date, m.tries, m.max_tries, m.errortext, m.address, m.subject, m.template, m.data
  from
    msg_queue mc inner join msg m on mc.msg = m.msg
    left join msg_carrier c on mc.msg_carrier = c.msg_carrier
  where
    m.msg_type = prm_type and
    (case when m.tries >= m.max_tries then true else false end) = true or
    cast(date_part('epoch', age(mc.queue_date, m.created_date))/3600 as integer) >= 24;

  delete from msg_queue
  where exists (
    select 1 from msg_failed as x where x.msg_type = prm_type and x.msg = msg_queue.msg
  );

  delete from msg
  where exists (
    select 1 from msg_failed as x where x.msg_type = prm_type and x.msg = msg.msg
  );

  -- Mensajes pendientes:
  --  Tiempo transcurrido desde ultimo intento de envio mayor a 2 horas
  delete from msg_queue
  where exists (
    select 1 from
      msg_queue mc inner join msg m on mc.msg = m.msg
      left join msg_carrier c on mc.msg_carrier = c.msg_carrier
    where
      m.msg_type = prm_type and
      mc.msg = msg_queue.msg and
      m.last_attempt_date is not null and
      cast(date_part('epoch', age(cast(now() as timestamp), m.last_attempt_date))/3600 as integer) >= 2
  );

  update msg
  set tries = 0, last_attempt_date = null
  where msg_type = prm_type and
  not exists (
    select 1 from msg_queue as x where x.msg = msg.msg
  );

  return 1;
END;
$BODY$;
ALTER FUNCTION public.uf_msg_purge_queue(smallint)
    OWNER TO postgres;






