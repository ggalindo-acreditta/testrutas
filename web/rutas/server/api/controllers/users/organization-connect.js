'use strict';
var User = require('../../models/users');
var sessionError = require('../../helpers/error').session;
var registroError = require('../../helpers/error').registro;
var ControllerValidator = require('../../helpers/controller-validator');

module.exports = function(req, res) { 
  var usuario = 0;  
  var salida = {};
  var schemaValidateInput = {};
  var schemaValidateInputError = {};
  var controllerValidator;  

  // Tomar los valores de la sesion
  if (req.session) { 
    usuario = req.session.user;  
  }
  if (!req.session || typeof usuario === 'undefined' ) { 
    // Ha ocurrido un error
    salida = {
      status: 500, 
      message: sessionError.S9999.message,
      code: sessionError.S9999.code,
      errors: []
    };
    res.status(salida.status);
    return res.json(salida); 
  }
  //usuario = 1; 

  controllerValidator = new ControllerValidator({locale: req.getLocale()});
  schemaValidateInput = {
    required: ['name', 'domain', 'description', 'token', 'photo_url', 'acclaim_id'],
    properties: {
      name: {type: 'string'},
      domain: {type: 'string'},
      description: {type: 'string'},
      token: {type: 'string'},
      photo_url: {type: 'string', format: 'url'},
      acclaim_id: {type: 'string', format: 'uuid'}
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

  User.connect({
    usuario: usuario,
    name: req.body.name,
    domain: req.body.domain,
    description: req.body.description,
    token: req.body.token,
    photo_url: req.body.photo_url,
    acclaim_id: req.body.acclaim_id
  }, function(err, data) {
    var salida = {};
    if (err) { 
      salida = {
        status: 404,
        statusCode: 'error',
        message: registroError.AC010.message,
        code: registroError.AC010.code,
        errors: []
      };
      res.status(salida.status);
      return res.json(salida);
    }
    if (data) {
      salida = {
        status: 201,
        statusCode: "success",
        message: "Usuario Conectado con exito",
        data: {
          organization: data.organizationid
        }
      };
      req.session.organization = data.organizationid
      res.status(salida.status).json(salida).end(); 
    }
  });
};
