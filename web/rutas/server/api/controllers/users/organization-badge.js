'use strict';

var User = require('../../models/users');
const UserModel = require('../../models/users').User;
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
 
  try {      
    const lom = new UserModel(usuario); 
		const data = await lom.get();
    
    controllerValidator = new ControllerValidator({locale: req.getLocale()});
    schemaValidateInput = {
			required: ['id', 'acclaim_id', 'token'],
			properties: {
				organization_id: {type: 'integer'},
				acclaim_id: {type: 'string', format: 'uuid'},
        token: {type: 'string'}
			}
    };
    if (!controllerValidator.validateData(schemaValidateInput, data)) {
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

    request({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+btoa(data.token)
      },
      uri: process.env.ACCLAIM_URL + data.acclaim_id + '/badge_templates',
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
			salida = {
				status: resApi.statusCode,
				message: JsonApi.data.message,
				errors: []
			};
			res.status(salida.status);
			return res.json(JsonApi.data);
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
