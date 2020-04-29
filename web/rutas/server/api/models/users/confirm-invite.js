var sql = require('../../db/sql').user;
var userError = require('../../helpers/error').usuario;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

var confirmInvite = function confirmInvite(values, fn) {
  var schemaValidator = {
    code: {type: 'string', required: true},
    firstname: {type: 'string', required: true},
    lastname: {type: 'string', required: true},
    password: {type: 'string', required: true}
  };

  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }

  db.one(sql.confirmInvite, values)
    .then(function(data) {
      var lValues = {};
      if (data.error === '') {
        lValues = {
          user: data.userid,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          password: data.password
        };
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

module.exports = confirmInvite;