'use strict';
var User = require('../../models/users');
var registroError = require('../../helpers/error').registro;
var ControllerValidator = require('../../helpers/controller-validator');
var hasher = require('../../helpers/password-hasher');

module.exports = function(req, res) {
  var salida = {};
  var schemaValidateInput = {};
  var schemaValidateInputError = {}; 
  var controllerValidator;
  controllerValidator = new ControllerValidator({locale: req.getLocale()});
  schemaValidateInput = {
    required: ['code','password','firstname','lastname'],
    properties: {
      code: {type: 'string', minLength: 64, maxLength: 64},
      password: {type: 'string', minLength: 6, maxLength: 20, pattern: "^(?!\\s*$).+"},
      firstname: {type: 'string', minLength: 1, maxLength: 30, pattern: "^(?!\\s*$).+"},
      lastname: {type: 'string', minLength: 1, maxLength: 30, pattern: "^(?!\\s*$).+"}
    }
  };
  if (!controllerValidator.validateData(schemaValidateInput, req.body)) {
    schemaValidateInputError = controllerValidator.getErrors();
    salida = {
      status: 400,
      statusCode: "error",
      message: schemaValidateInputError.message,
      code: schemaValidateInputError.code,
      errors: []
    };
    if (schemaValidateInputError.vendor && schemaValidateInputError.vendor.errors &&
      schemaValidateInputError.vendor.errors.length > 0) {
      salida.errors = schemaValidateInputError.vendor.errors;
    } else if (schemaValidateInputError.vendor && schemaValidateInputError.vendor.code) {
      salida.errors.push({
        code: schemaValidateInputError.vendor.code,
        message: schemaValidateInputError.vendor.message,
        label: ""
      });
    }
    res.status(salida.status);
    return res.json(salida);
  }

  User.confirmInvite({
    code: req.body.code,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hasher(req.body.password)
  }, function(err, data) {
    var salida = {};
    if (err) {
      switch (err.code) {
        case registroError.AC010:
          salida = {
            status: 404,
            statusCode: 'error',
            message: registroError.AC010.message,
            code: registroError.AC010.code,
            errors: []
          };
          break;
        case registroError.AC001:
          salida = {
            status: 409,
            statusCode: 'error',
            message: registroError.AC001.message,
            code: registroError.AC001.code,
            errors: []
          };
          break;
        default:
          salida = {
            status: 500,
            statusCode: 'fail',
            message: err.message,
            code: err.code
          };
          break;
      }
      res.status(salida.status);
      return res.json(salida);
    }
    if (data) {
      salida = {
        status: 201,
        statusCode: "success",
        message: "Usuario confirmado con exito",
        data: {
          user: data.user,
          email: data.email.toLowerCase(),
          firstname: data.firstname,
          lastname: data.lastname
        }
      };
      res.status(salida.status).json(salida).end(); 
    }
  });
};
