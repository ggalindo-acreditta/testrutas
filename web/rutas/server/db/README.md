
----

- [Base de Datos](#base-de-datos)
  - [Montar el ambiente de desarrollo](#montar-el-ambiente-de-desarrollo)
  - [Evolución de la base de datos](#evoluci%C3%B3n-de-la-base-de-datos)
    - [Crear archivo parche](#crear-archivo-parche)
    - [Lista de parches](#lista-de-parches)
    - [Definición de Objetos](#definici%C3%B3n-de-objetos)
      - [Cast](#cast)
      - [Domain](#domain)
      - [Function](#function)
      - [Schema](#schema)
      - [Role](#role)
      - [Sequence](#sequence)
      - [Table](#table)
      - [Type](#type)
      - [User](#user)
      - [View](#view)
  - [Generar version](#generar-version)

----

# Base de Datos
En este directorio se  lleva el control de la base de datos.

Esta es la estructura de directorios para el desarrollo con la base de datos.
````
|- dev/
  |- backup/
  |- object/
    |- cast/
    |- domain/
    |- function/
    |- schema/
    |- role/
    |- sequence/
    |- table/
    |- type/
    |- user/
    |- view/
  |- upgrade/
    |- patch-list.js
    |- patch-{ID}.sql
|- tools/
  |- shared/
    |- common.sh
  |- create-object.sh
  |- new-patch-file.sh
  |- restore-backup.sh
````

- **dev/backup:** Contiene el respaldo de la base de datos para desarrollo.
- **dev/object/:** Contiene la definición de los objetos de base de datos en archivos planos, organizados por tipo de objeto.
- **dev/upgrade/:** Contiene la lista de parches sql para la evolución de la base de datos.
- **dev/tools/create-object.sh:** Script para crear los archivos necesarios para la definición de un objeto.
- **dev/tools/new-patch-file.sh:** Script para la creation de un archivo de parche.
- **dev/tools/restore-backup.sh:** Script para la restauración del respaldo de base de datos.


## Montar el ambiente de desarrollo
Para que un desarrollador inicie un trabajo lo primero que debe hacer es restaurar el respaldo de la base de datos que actualmente existe en la carpeta ````db/dev/backup/````

Primero configuramos Postgres para que no nos pida contraseña cuando usemos sus utilitarios, en el script se le indica que para cualquier host/base de datos, la clave del usuario *postgres* es *1234*
````sh
$ cd ~/
$ touch .pgpass
$ echo "*:*:*:postgres:1234" > .pgpass
$ chmod 0600 .pgpass
````

El utilitario *psql* debe estar presente en la variable de ambiente *PATH*, de lo contrario no podrá ser restaurada la base de datos.

Se utiliza las variables de ambiente *PGHOST*, *PGPORT* y *PGUSER*, y que son interpretadas por PostgreSql. Sus valores por defecto son:

````sh
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
````
Pero si alguno de estos valores es diferente entonces debe configurarse en el archivo *pgver.conf*

````sh
# Editar el archivo db/tools/pgver.conf
$ cp db/tools/pgver.conf.sample db/tools/pgver.conf
````

Luego ya se puede restaurar la base de datos

````sh
$ db/tools/restore-backup.sh
````

La base de datos que se restaura tiene por nombre ***auth_base***.

Todos los usuarios tienen la clave *654321*.   
El usuario administrador es **admin**.

Luego de restaurar la base de datos es necesario aplicar los parches
> Es necesario que estén configurado la cadena de conexión en *api/config/config.js*

````sh
$ npm run applydbpatch
````

## Evolución de la base de datos

### Crear archivo parche

La evolución de la base de datos se hace mediante la creación de parches sql. A medida que los parches se aplican, la base de datos mantiene información de los que se han aplicado.

Para crear un archivo parche se utiliza la herramienta *db/tools/new-patch-file.sh*, al cual se le debe indicar el tipo de parche a crear (*sql*) y la ruta donde debe crearlo.

> Los parches sql son solo scripts de sql, y cuando se ejecutan ya existe una transacción en curso.

Para crear un archivo de parche

````sh
$ db/tools/new-patch-file.sh sql ../dev/upgrade
```` 

El parche debe ser incluido en la lista de parches *patch-list.js*.
> Nuestros cambios siempre deben incluirse al final de la lista.

La definición del objeto que vamos a crear o a actualizar siempre debe tomarse de su archivo de definición (*db/dev/object/*), y es nuestra responsabilidad validar que el cambio que se aplique haga todas las validaciones necesarias para que no falle la aplicación del cambio. Por ejemplo:
- Si el cambio a aplicar es agregar un campo a una tabla, entonces debemos validar que el campo no exista antes de intentar crearlo, es decir, agregarlo solo si la tabla no lo tiene.
- Si el cambio consiste en crear una tabla, entonces debemos asegurarnos que la tabla no exista.
- Si el cambio consiste en agregar un parámetro a una función existente, entonces debemos eliminar la función y volver a crearla. En PostgreSql existe la recarga de funciones, si no se hace de esta forma entonces vamos a tener como resultado dos (02) funciones.
- Si el cambio consiste en agregar un registro a una tabla, entonces debemos validar que el registro no exista.

> Para poder hacer estas validaciones en la base de datos se cuenta con funciones utilitarias *public.uf_dbadm_*

**Importante:**
- Si se va a agregar un campo a una tabla, el campo debe incluirse al final.
- Si se va a agregar un parámetro a una función, el parámetro debe incluirse al final (antes de los campos del tipo OUT).
- Si se va a incluir un campo a un *resulset*, este campo debe incluirse al final.
- Todos los cambios deben hacerse compatibles hacia atrás.

El parche lo deberíamos poder aplicar varias veces y obtener el mismo resultado, gracias a las validaciones que se le incorporen.
> Una forma de probar el parche es aplicarlo directamente sobre la base de datos y luego aplicarlo mediante la herramienta.

### Lista de parches

Los parches que se van generando deben ser incluidos en la lista de parches a aplicar que se encuentra en *db/dev/upgrade/patch-list.js*.

Cada entrada del archivo *patch-list.js* tiene la siguiente estructura:

````javascript
{
  patch: 'NOMBRE-DEL-ARCHIVO-PARCHE.sql'
}
````

el cual forma parte de un array, por lo que deben separarse por coma.
> Nuestros cambios deben incluirse al final.

Los parches pueden aplicar validaciones de dependencia, bien sea porque se necesite que ciertos parches ya estén aplicados para aplicar los nuestros (*dependencies*), o si ya se ha aplicado otros parches entonces no se aplique el nuestro (*dependents*), o que se aplique el parche solo si ya se ha aplicado otro parche (*dependencies-soft*). 
> El tipo de dependencia *dependencies* se diferencia de *dependencies-soft* en que el primero detiene la aplicación de los parches, mientras que el segundo continúa con la aplicación de la lista.

Esto se le indica a cada entrada en *patch-list.js* de la siguiente forma:
````javascript
{
  patch: 'nombre-archivo-sql',
  dependencies: ['nombre-archivo-sql', ...],
  dependenciesSoft: ['nombre-archivo-sql', ...],
  dependents: ['nombre-archivo-sql', ...]
}
````

Son opcionales y trabajan por separado, es decir, solo se debe incluir la validación que se requiera.

### Definición de Objetos

Cuando se modifique un objeto existente (tabla, vista, función, stored-procedute, dominio, tipo, etc.), además de hacer el cambio en el parche es **OBLIGATORIO** modificar el objeto correspondiente que se encuentra ubicado en *db/dev/object/*.
Para modificar un objeto se debe partir de su definición, y **NO DEBE SER** tomado de la herramienta que usemos para conectarnos a la base de datos (PG Admin, MS Managment Studio, etc.), ya que tienden a modificar y alterar el código para aplicar sus propias nomenclaturas.
> El mas común son las vistas, con *PG Admin* el código queda totalmente cambiado y sin las ideaciones que le hemos dado.

Cada objeto se compone por un conjunto de archivos que lo modelan.

Por ejemplo si se modifica la vista *VW_VISTA01*, en el parche se escribe las sentencias necesarias para modificarla (se eliminan las posibles referencias, se elimina la vista si es que se cambió la estructura, y se recrean los objetos que se eliminaron), pero a nivel de archivos de objeto solo hay que modificar *db/dev/object/view/public.VW_VISTA01/VW_VISTA01.def*.

Si se trata de una tabla, igual, pero hay que recordar que las columnas siempre se agregan al final, nunca en medio de las otras.

Este esquema nos permite saber cuando podemos estar entrando en conflicto con otros desarrolladores. Por ejemplo, si dos desarrolladores tienen asignada una tarea donde tienen que modificar el mismo trigger o procedimiento, entonces el deber ser es trabajar sobre la ultima versión, por lo cual, si otro desarrollador ya publicó su trabajo va a entrar en conflicto con el nuestro, y de esta forma el segundo desarrollador está obligado a aplicar sus cambios pero adaptándolos a la version modificada.

Nunca debemos sobrescibir los cambios entrantes con los nuestros, ya que estaríamos reversando un cambio ya publicado. Lo que se hace es adaptar nuestros cambios a la nueva versión.

Lo mismo va a ocurrir con la lista de parches, que al momento de actualizar nuestro directorio de trabajo casi siempre se va a generar un conflicto, pero este caso es mucho mas fácil de corregir, ya que nuestros cambios o nuestros parches siempre deben incluirse al final.

Cuando sea necesario crear un nuevo objeto se debe utilizar la herramienta *db/tools/create-object.sh*, al cual le debemos indicar el tipo de objeto a crear, el esquema o propietario, el nombre del objeto, y la ruta donde va a crearse. Esto genera los archivos necesarios.

**Los objetos se definen con sintaxis para crearlos, no modificarlos ni eliminarlos.**

A nivel de parche se escriben las sentencias necesarias.

Para mas información ver la ayuda de la herramienta.

**Nota sobre las definiciones de las dependencias:** Cada objeto tiene por lo general un archivo .dep donde se definen las dependencias del mismo.
Estas dependencias aplican al momento en que se va a generar el script completo de creacion de la base de datos a partir de las definiciones, donde se requiere la existencia de un objeto para poder crear otro. Un caso practico es una funcion que dependa de otra funcion, o una tabla que dependa de una funcion (funciones para generar valores por defecto).    
Las dependencias tienen el formato:    
tipoObjeto:esquema.nombreObjeto    
Donde tipoObjeto puede ser: fn (funcion), sp (procedimiento almacenado), y vw (vista).

#### Cast

Para crear un objeto Cast hay que especificar el tipo de dato de entrada y el tipo de dato de salida, siguiente el formato TIPODATOENTRADA--TIPODATOSALIDA para el nombre del objeto.

````sh
$ tools/create-object.sh cast TIPODATOENTRADA--TIPODATOSALIDA ../dev/object/
````

Esto genera los siguientes archivos

````
|- cast/
  |- tipodatoentrada-tipodatosalida.def
  |- tipodatoentrada-tipodatosalida.dep
````

Donde,
- **archivo.def:** Sintaxis para la creacion del objeto.
- **archivo.dep:** Lista de dependencias.

#### Domain

Para crear un dominio se debe indicar el esquema que lo contiene, el nombre del dominio, y el directorio de salida

````sh
$ tools/create-object.sh domain esquema nombreObjeto ../dev/object/
````

Esto genera el siguiente archivo

````
|- domain/
  |- esquema.nombreObjeto.def
````

Donde,
- **archivo.def:** Sintaxis para la creacion del objeto.

#### Function

Para crear una funcion se debe indicar el esquema que lo contiene, el nombre de la funcion, y el directorio de salida

````sh
$ tools/create-object.sh function esquema nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- function/
  |- esquema.nombreObjeto/
    |- nombreObjeto.auth
    |- nombreObjeto.def
    |- nombreObjeto.dep
````

Donde,
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.def:** Sintaxis para la creacion del objeto.
- **archivo.dep:** Lista de dependencias.

#### Schema

Para crear un esquema se debe indicar el nombre y el directorio de salida

````sh
$ tools/create-object.sh schema nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- schema/
  |- nombreObjeto/
    |- nombreObjeto.auth
    |- nombreObjeto.def
````

Donde,
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.def:** Sintaxis para la creacion del objeto.

#### Role

Para crear un rol de base de datos se debe indicar el nombre y el directorio de salida

````sh
$ tools/create-object.sh role nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- role/
  |- nombreObjeto/
    |- nombreObjeto.auth
    |- nombreObjeto.def
````

Donde,
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.def:** Sintaxis para la creacion del objeto.

#### Sequence

Para crear un objeto Secuencia hay que especificar el tipo de objeto, el esquema, el nombre de la secuencia y el directorio de salida.

````sh
$ tools/create-object.sh sequence esquema nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- sequence/
  |- esquema.nombreObjeto.auth
  |- esquema.nombreObjeto.def
````

Donde,
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.def:** Sintaxis para la creacion del objeto.

#### Table

Para crear una tabla se debe indicar el esquema que lo contiene, el nombre de la tabla, y el directorio de salida

````sh
$ tools/create-object.sh table esquema nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- table/
  |- esquema.nombreObjeto/
    |- nombreObjeto.ak
    |- nombreObjeto.auth
    |- nombreObjeto.chk
    |- nombreObjeto.def
    |- nombreObjeto.dep
    |- nombreObjeto.fk
    |- nombreObjeto.idx
    |- nombreObjeto.pk
    |- nombreObjeto.rule
    |- nombreObjeto.trg
````

Donde,
- **archivo.ak:** Sintaxis para la creacion de claves unicas.
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.chk:** Sintaxis para la creacion de los *check* a nivel de tabla y de campo.
- **archivo.def:** Sintaxis para la creacion del objeto.
- **archivo.dep:** Lista de dependencias.
- **archivo.fk:** Sintaxis para la creacion de las claves foráneas.
- **archivo.idx:** Sintaxis para la creacion de los indices.
- **archivo.pk:** Sintaxis para la creacion de la clave primaria.
- **archivo.rule:** Sintaxis para la creacion de los *rules*.
- **archivo.trg:** Sintaxis para la creacion de los *triggers*.    
Los Triggers en Postgres se compone del *trigger* y la funcion que ejecuta, por lo que la funcion que se ejecuta se define como un objeto *function* y acá se define solamente el trigger.

#### Type

Para crear una *type* se debe indicar el esquema que lo contiene, el nombre del *type*, y el directorio de salida

````sh
$ tools/create-object.sh type esquema nombreObjeto ../dev/object/
````

Esto genera el siguiente archivo

````
|- type/
  |- esquema.nombreObjeto.def
````

Donde,
- **archivo.def:** Sintaxis para la creacion del objeto.

#### User

Para crear un usuario de base de datos se debe indicar el nombre y el directorio de salida

````sh
$ tools/create-object.sh user nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- user/
  |- nombreObjeto/
    |- nombreObjeto.auth
    |- nombreObjeto.def
````

Donde,
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.def:** Sintaxis para la creacion del objeto.

#### View

Para crear una vista se debe indicar el esquema que lo contiene, el nombre de la vista, y el directorio de salida

````sh
$ tools/create-object.sh view esquema nombreObjeto ../dev/object/
````

Esto genera los siguientes archivos

````
|- view/
  |- esquema.nombreObjeto/
    |- nombreObjeto.auth
    |- nombreObjeto.def
    |- nombreObjeto.dep
    |- nombreObjeto.rule
````

Donde,
- **archivo.auth:** Sintaxis para asignarle los permisos.
- **archivo.def:** Sintaxis para la creacion del objeto.
- **archivo.dep:** Lista de dependencias.
- **archivo.rule:** Sintaxis para la creacion de los *rules*.


## Generar version

Siguiendo el workflow para trabajo con repositorios de Git, cuando se está preparando la rama release se debe incluir un nuevo script de sql (en *patch-list.js*) donde se incluya el numero de la version.

La tabla que lleva el control de los parches aplicados tiene el campo *nversion*, y es donde se le indicará a la base de datos la version que actualmente tiene.

El script debe tener el nombre *version-mayor.menor.hotfix.sql* y su contenido es:

````
insert into xfm_db_version (parche, aplicado, nversion)
values ('version-mayor.menor.hotfix.sql', 0, 'mayor.menor.hotfix')
````

> En *patch-list.js* se debe agregar al final:

Ejemplo, si se va a generar la version 2.1.0 entonces:
````
# contenido del archivo version-2.1.0.sql
insert into db_version (parche, aplicado, nversion)
values ('version-2.1.0.sql', 0, '2.1.0')

# contenido de patch-list.js
{
  patch: 'version-2.1.0.sql'
}
````

De esta forma la herramienta que aplica el parche lo marcará como aplicado luego de que lo haga con éxito.
