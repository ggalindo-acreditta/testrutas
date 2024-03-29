'use strict';

var sql = require('../../db/sql').mensajes;
var mensajeError = require('../../helpers/error').mensaje;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

/**
 * Mensaje enviado con exito
 * @param  {Object}   values {mensaje, carrier, tipo}
 * @param  {Function} fn     next()
 * @return {Function} next()
 */
var setIntentoExitoso = function setIntentoExitoso(values, fn) {
  // Validar los datos de entrada
  var schemaValidator = {
    msg: {type: 'uuid', required: true},
    carrier: {type: 'string', required: true},
    type: {type: 'integer', required: true}
  };
  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }
  // FIN - Validar los datos de entrada

  // Marcar el intento exitoso
  db.none(sql.setIntentoExitoso, values)
    .then(function() {
      fn(null, {});
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

module.exports = setIntentoExitoso;
