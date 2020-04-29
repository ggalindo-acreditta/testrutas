'use strict';

var User = require('../../models/users');
var sessionError = require('../../helpers/error').session; 
var ControllerValidator = require('../../helpers/controller-validator');
const request = require('request');
var btoa = require('btoa');

module.exports = async (req, res) => { 
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado 
  var salida = {}; 
  var usuario = 0;
  var organization = 0;
  var schemaValidateInput = {};
  var schemaValidateInputError = {};
  var controllerValidator;
  var JsonApi = {};
 
  // Tomar los valores de la sesion
  if (req.session) { 
    usuario = req.session.user;  
    organization = req.session.organization;
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
    required: ['id', 'token'],
    properties: {
      id: {type: 'string', format: 'uuid'},
      token: {type: 'string'}
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
 
  try {
    request({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+btoa(req.body.token)
      },
      uri: process.env.ACCLAIM_URL + req.body.id,
      method: 'GET'
    }, function (errApi, resApi, bodyApi) {
      if (errApi){        
        salida = {
          status: 500,
          message: errApi.message,
          errors: []
        };
        if (errApi.vendor && errApi.vendor.code) {
          salida.errors.push({
            code: errApi.vendor.code,
            title: errApi.vendor.message,
            detail: ''
          });
        }
        res.status(salida.status);
        return res.json(salida);
      } 
      JsonApi= JSON.parse(bodyApi);
      if (resApi.statusCode !== 200){        
        salida = {
          status: 500,
          message: JsonApi.data.message,
          errors: []
        };
        salida.errors.push({
          code: resApi.statusCode,
          title: resApi.statusMessage,
          detail: ''
        });
        res.status(salida.status);
        return res.json(salida);
      } 
      User.connect({
        usuario: usuario,
        name: JsonApi.data.name,
        domain: JsonApi.data.website_url,
        description: JsonApi.data.bio,
        token: req.body.token,
        photo_url: JsonApi.data.photo_url,
        acclaim_id: JsonApi.data.id
      }, function(err, data) {
        var salida = {};
        if (err) {
          salida = {
            status: 500,
            statusCode: 'fail',
            message: err.message,
            code: err.code
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
    });
  } catch (err) {
    salida = {
      status: 500,
      message: err.message,
      errors: []
    };
    if (err.vendor && err.vendor.code) {
      salida.errors.push({
        code: err.vendor.code,
        title: err.vendor.message,
        detail: ''
      });
    }
    res.status(salida.status);
    return res.json(salida);
  }
};
