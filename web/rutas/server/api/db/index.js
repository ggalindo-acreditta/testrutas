'use strict';

// Cargar nuestro archivo de configuracion

// Bluebird is the best promise library available today,
// and is the one recommended here:
const promise = require('bluebird');
const moment = require('moment');
/*
// Loading all the database repositories separately,
// because event 'extend' is called multiple times:
var repos = {
  usuarios: require('./repos/usuarios'),
  representantes: require('./repos/representantes')
};

// pg-promise initialization options:
var options = {
  // Use a custom promise library, instead of the default ES6 Promise:
  promiseLib: promise,

  // Extending the database protocol with our custom repositories:
  extend: function(obj) {
    // Do not use 'require()' here, because this event occurs for every task
    // and transaction being executed, which should be as fast as possible.
    obj.usuarios = repos.usuarios(obj);
    obj.representantes = repos.representantes(obj);
  }
};
*/

// pg-promise initialization options:
const options = {
  promiseLib: promise
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, str => moment(str).format());
types.setTypeParser(1184, str => moment(str).format());
types.setTypeParser(1082, str => str);

// Create the database instance:

const db = pgp(process.env.DATABASE);

// Load and initialize all the diagnostics:
const diag = require('./diagnostics');
diag.init(options);

// If you ever need to change the default pool size, here's an example:
// pgp.pg.defaults.poolSize = 20;

module.exports = {
  // Library instance is often necessary to access all the useful
  // types and namespaces available within the library's root:
  pgp,
  // Database instance. Only one instance per database is needed
  // within any application.
  db
};
