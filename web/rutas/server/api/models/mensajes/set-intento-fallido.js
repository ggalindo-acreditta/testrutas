'use strict';

var sql = require('../../db/sql').mensajes;
var mensajeError = require('../../helpers/error').mensaje;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

/**
 * Marcar intento fallido al enviar mensaje
 * @param  {Object}   values {mensaje, errorText}
 * @param  {Function} fn     next()
 * @return {Function} next()
 */
var setIntentoFallido = function setIntentoFallido(values, fn) {
  // Validar los datos de entrada
  var schemaValidator = {
    msg: {type: 'uuid', required: true},
    errorText: {type: 'string', required: false}
  };
  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }
  // FIN - Validar los datos de entrada

  // Marcar el intento fallido
  db.none(sql.setIntentoFallido, values)
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

module.exports = setIntentoFallido;
