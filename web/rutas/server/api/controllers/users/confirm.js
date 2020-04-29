'use strict';
var User = require('../../models/users');
var registroError = require('../../helpers/error').registro;
var ControllerValidator = require('../../helpers/controller-validator');
var hasher = require('../../helpers/password-hasher');
var mailer = require('../../helpers/mailer.js');
var crypto = require('crypto');
var redis = require('redis');
var client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

module.exports = function(req, res) {
  var code = '';
  var token = '';
  var salida = {};
  var schemaValidateInput = {};
  var schemaValidateInputError = {}; 
  var controllerValidator;
  controllerValidator = new ControllerValidator({locale: req.getLocale()});
  schemaValidateInput = {
    required: ['param1'],
    properties: {
      param1: {type: 'string', minLength: 64, maxLength: 64}
    }
  };
  if (!controllerValidator.validateData(schemaValidateInput, req.query)) {
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

  User.confirm({
    registration_code: req.query.param1
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
