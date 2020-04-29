'use strict';
 
var omCombo = require('../../models/combo').combo; 
var sessionError = require('../../helpers/error').session;
var QueryFilterSort = require('../../helpers/query-filter-sort'); 
var ControllerValidator = require('../../helpers/controller-validator');

module.exports = async (req, res) => {  
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado  
  var salida = {}; 
  var usuario = 0;  

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

  try {    
    const lquery = req.query;  
    const lom = new omCombo(usuario); 
    const salida = await lom.getMateriality(lquery);  
    res.status(200);
    return res.json(salida); 
  } catch (err) {
    salida = { 
      status: 400,
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
