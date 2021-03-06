'use strict';

const Element = require('../../models/element').Element;
var sessionError = require('../../helpers/error').session; 

module.exports = async (req, res) => { 
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado  
  var salida = {}; 
  var usuario = 0;  
  var elementId = 0;
  var organization = 0; 

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
  elementId = req.swagger.params.id.value ? req.swagger.params.id.value : 0; 

  try {
    const lom = new Element(elementId, null, usuario); 
    const data = await lom.delete();
		
    res.status(200);
    return res.json(data);
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
