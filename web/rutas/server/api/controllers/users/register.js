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
    required: ['email', 'password', 'firstname', 'lastname'],
    properties: {
      email: {type: 'string', format: 'email', minLength: 8, pattern: "^(?!\\s*$).+"},
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

  code = crypto.randomBytes(3).toString('hex');
  let random = crypto.randomBytes(15).toString('hex');
  let a = crypto.createHmac("sha256", process.env.HASH_KEY);
  token = a.update(random).digest("hex");

  User.register({
    password: hasher(req.body.password),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    token: token
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
      // Se envia el correo de confirmacion
      var salida = {};
      var template = "confirmation";
      var subjectCorreo = "Confirma tu cuenta en Rutas Acreditta";
      var data = {"email": req.body.email, "code": code, "token": token, "url": process.env.CONFIRM_URL, "logo": process.env.LOGO_URL};
      mailer.sendTextEmailToAddress(1, req.body.email.toLowerCase(), subjectCorreo, template, data);
      salida = {
        status: 201,
        statusCode: "success",
        message: "Usuario registrado con exito",
        data: {
          email: req.body.email.toLowerCase(),
          firstname: req.body.firstname,
          lastname: req.body.lastname
        }
      };
      res.status(salida.status).json(salida).end(); 
    }
  });
};
