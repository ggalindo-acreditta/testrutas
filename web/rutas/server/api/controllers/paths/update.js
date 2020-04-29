'use strict';

const Path = require('../../models/path').Path;
var sessionError = require('../../helpers/error').session; 
var ControllerValidator = require('../../helpers/controller-validator');

module.exports = async (req, res) => {  
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado  
  var salida = {}; 
  var usuario = 0;  
  var schemaValidateInput = {};
  var schemaValidateInputError = {};
  var controllerValidator;
  var elementTree = {
    parent: [],
    element: [],
    x: [],
    y: [],
    width: [],
    high: []
  };

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
    required: ['id', 'name', 'materiality', 'difficulty', 'score', 'language'],
    properties: {  
      id: {type: 'integer', minimum: 1},
      name: {type: 'string', minLength: 5},
      description: {type: 'string'},
      skills: {type: 'string'},
      tags: {type: 'string'},
      criterion: {type: 'string'},
      materiality: {type: 'string'},
      difficulty: {type: 'string'},
      image_url: {type: 'string'},
      expire_at: {type: 'string', format: 'date'},
      score: {type: 'integer'},
      language: {type: 'string'},
      tree: {type: 'array'}
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

  if (req.body.tree) {
    for (var i = 0; i < req.body.tree.length; i++) { 
      elementTree.parent.push(req.body.tree[i].parent);
      elementTree.element.push(req.body.tree[i].element); 
      elementTree.x.push(req.body.tree[i].x ? req.body.tree[i].x : -1); 
      elementTree.y.push(req.body.tree[i].y ? req.body.tree[i].y : -1); 
      elementTree.width.push(req.body.tree[i].width ? req.body.tree[i].width : -1); 
      elementTree.high.push(req.body.tree[i].high ? req.body.tree[i].high : -1); 
    }
  }   

  try {      
    const lbody = req.body; 
    req.body.tree = elementTree; 
    const lom = new Path(lbody.id, lbody.name, usuario); 
    const data = await lom.put(lbody);  
 
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
