'use strict';

var sql = require('../../db/sql').mensajes;
var mensajeError = require('../../helpers/error').mensaje;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

var crear = function crear(values, fn) {
  var schemaValidator = {
    type: {type: 'integer', required: true},
    priority: {type: 'integer', required: true},
    user: {type: 'uuid', required: false},
    address: {type: 'string', required: false},
    template: {type: 'string', required: true}
  };
  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }
  // FIN - Validar los datos de entrada

  // Crear el mensaje
  db.one(sql.crear, values)
    .then(function(data) {
      if (data.error === '' || data.error === '00000') {
        fn(null, data);
      } else {
        // Error creando el Mensaje
        var lError = mensajeError[data.error];
        var salida = {
          code: lError.code,
          message: lError.message
        };
        fn(salida);
      }
    })
    .catch(function(error) {
      console.log(error);
      // Error desconocido creando el Mensaje
      var lError = mensajeError.M9999;
      var salida = {
        code: lError.code,
        message: lError.message,
        vendor: {
          code: error.code ? String(error.code) : lError.code,
          message: error.message ? error.message : lError.message
        }
      };
      fn(salida);
    });
};

module.exports = crear;
