var sql = require('../../db/sql').user;
var userError = require('../../helpers/error').usuario;
var dataTypeValidator = require('../../helpers/model-validator')();
var db = require('../../db').db;
var _ = require('lodash');

var authenticate = function authenticate(values, fn) {
  var schemaValidator = {
    email: {type: 'string', required: true}
  };

  var dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    return fn(dataTypeError);
  }

  db.one(sql.authenticate, values) 
    .then(function(data) {
      var lValues = {};
      if (data.error === '') {
        lValues = {
          email: data.email,
          userid: data.userid,
          org_id: data.organization_id,
          org_name: data.organization_name,
          org_description: data.organization_description,
          org_domain: data.organization_domain,
          org_photo_url: data.organizacion_photo_url,
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

module.exports = authenticate;