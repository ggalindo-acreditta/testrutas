'use strict';

var sql = require('../../db/sql').user;
var registerError = require('../../helpers/error').registro;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

var registerBasic = function registerBasic(values, fn) {
  var schemaValidator = {
    email: {type: 'string', required: true},
    password: {true: 'string', required: true},
    firstname: {true: 'string', required: true},
    lastname: {true: 'string', required: true},
    token: {true: 'string', required: true}
  };

  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }

  db.one(sql.register, values)
    .then(function(data) {
      var lValues = {};
      if (data.error === '') {
        lValues = { email: data.email, user: data.email, userid: data.user };
        fn(null, lValues);
      } else {
        var lError = registerError[data.error];
        var salida = {
          code: lError.code,
          message: lError.message
        };
        fn(salida);
      }
    })
    .catch(function(error) {
      var lError = registerError.AC999;
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
module.exports = registerBasic;
