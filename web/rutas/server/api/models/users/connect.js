'use strict';

var sql = require('../../db/sql').user;
var userError = require('../../helpers/error').usuario;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

var organizationConnect = function organizationConnect(values, fn) {
  var schemaValidator = {
    usuario: {type: 'integer', required: true},
    name: {type: 'string', required: true},
    domain: {true: 'string', required: true},
    description: {true: 'string', required: true},
    token: {true: 'string', required: true},
    photo_url: {true: 'string', required: true},
    acclaim_id: {true: 'string', required: false}
  };

  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }

  db.one(sql.connect, values)
    .then(function(data) {
      var lValues = {};
      if (data.error === '') {
        lValues = { organizationid: data.organizationid };
        fn(null, lValues);
      } else {
        var lError = userError[data.error];
        var salida = {
          code: lError.code,
          message: lError.message
        };
        fn(salida);
      }
    })
    .catch(function(error) {
      var lError = userError.U9999;
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
module.exports = organizationConnect;
