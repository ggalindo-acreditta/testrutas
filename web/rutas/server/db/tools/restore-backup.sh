#!/bin/bash

# Copyright 2013 Binwus LLC
# All rights reserved

SCRIPT_DIR=$( dirname "$0" )
. "$SCRIPT_DIR"/shared/common.sh

# Si existe el archivo pgver.conf se utiliza
if [ -f "$SCRIPT_DIR"/pgver.conf ]; then
  . "$SCRIPT_DIR"/pgver.conf
fi

if [ "$PGHOST" == "" ]; then
	PGHOST=localhost
  export PGHOST
fi

if [ "$PGUSER" == "" ]; then
	PGUSER=postgres
  export PGUSER
fi

if [ "$PGPORT" == "" ]; then
  PGPORT=5432
  export PGPORT
fi

BACKUPDIR="$SCRIPT_DIR"/../dev/backup/
echo $BACKUPDIR
if [ -f "$BACKUPDIR/db-base.sql" ]; then
	rm "$BACKUPDIR/db-base.sql"
fi

if [ -f "$BACKUPDIR/db-base.sql.tar.gz" ]; then
	tar -zxf "$BACKUPDIR/db-base.sql.tar.gz" -C $BACKUPDIR
fi

if [ ! -f "$BACKUPDIR/db-base.sql" ]; then
	log "No existe el archivo db-base.sql"
	exit -1
fi

echo $PGPASSWORD
echo $PGHOST
echo $PGUSER
log "Restaurar base de datos 2 ..."
psql -q fundana < $BACKUPDIR/db-base.sql
log "... base de datos restaurada!"
