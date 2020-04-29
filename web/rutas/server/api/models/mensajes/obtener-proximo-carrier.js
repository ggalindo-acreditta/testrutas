'use strict';

var sql = require('../../db/sql').mensajes;
var mensajeError = require('../../helpers/error').mensaje;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

/**
 * Obtener el proximo Carrier disponible. Por defecto trata de obtener el que esta en uso actualmente
 * @param  {Object}   values {tipo, carrier}
 * @param  {Function} fn     next()
 * @return {Function} next()
 */
var obtenerProximoCarrier = function obtenerProximoCarrier(values, fn) {
  // Validar los datos de entrada
  var schemaValidator = {
    type: {type: 'integer', required: true},
    carrier: {type: 'string', required: true}
  };
  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }
  // FIN - Validar los datos de entrada

  // Obtener el Carrier
  db.one(sql.getNextCarrier, values)
    .then(function(data) {
      fn(null, data);
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

module.exports = obtenerProximoCarrier;
