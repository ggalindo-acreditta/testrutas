'use strict';

const Element = require('../../models/element').Element;
var sessionError = require('../../helpers/error').session; 
var ControllerValidator = require('../../helpers/controller-validator');

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
    required: ['name', 'issuer', 'score', 'language', 'materiality'],
    properties: {  
      name: {type: 'string', minLength: 5},
      issuer: {type: 'string'},
      issuer_url: {type: 'string', format: 'url'},
      category: {type: 'string'},
      duration: {type: 'integer'},
      description: {type: 'string'},
      skills: {type: 'string'},
      tags: {type: 'string'},
      criterion: {type: 'string'},
      materiality: {type: 'string'},
      score: {type: 'integer'},
      image_url: {type: 'string'},
      expire_at: {type: 'string', format: 'date'},
      language: {type: 'string'},
      badge_id: {type: 'string'},
      level: {type: 'string'}
    }
  };  
  if (!controllerValidator.validateData(schemaValidateInput, req.body)) {
    schemaValidateInputError = controllerValidator.getErrors();
    salida = {
      status: 400, 
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
    const lbody = req.body; 
    const lom = new Element(null, null, usuario); 
    const data = await lom.post(lbody);  
 
    salida = {   
      status: data.status,  
      message: data.message, 
      code: data.code, 
      id: data.id,
      link: {
        rel: 'self',
        href: url
      }
    };         
    res.status(salida.status);
    res.json(salida); 
  } catch (err) { 
    salida = {
      status: 401,
      message: err.message,
      code: err.code,
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
