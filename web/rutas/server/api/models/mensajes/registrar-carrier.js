'use strict';

var sql = require('../../db/sql').mensajes;
var mensajeError = require('../../helpers/error').mensaje;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

/**
 * Registra un Carrier
 * @param  {Object}   values {carrier, tipo, limit}
 * @param  {Function} fn     next()
 * @return {Function} next()
 */
var registrarCarrier = function registrarCarrier(values, fn) {
  // Validar los datos de entrada
  var schemaValidator = {
    carrier: {type: 'string', required: true},
    type: {type: 'integer', required: true},
    limit: {type: 'integer', required: true}
  };
  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }
  // FIN - Validar los datos de entrada

  // Crear el mensaje
  db.one(sql.registrarCarrier, values)
    .then(function(data) {
      if (data.error === '' || data.error === '00000') {
        fn(null, data);
      } else {
        // Error
        var lError = mensajeError[data.error];
        var salida = {
          code: lError.code,
          message: lError.message
        };
        fn(salida);
      }
    })
    .catch(function(error) {
      // Error desconocido
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

module.exports = registrarCarrier;
