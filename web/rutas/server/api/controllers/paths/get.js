'use strict';

const Path = require('../../models/path').Path;
var sessionError = require('../../helpers/error').session; 

module.exports = async (req, res) => { 
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado  
  var salida = {}; 
  var usuario = 0;  
  var pathId = 0; 

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
  pathId = req.swagger.params.id.value ? req.swagger.params.id.value : 0; 

  try {
    const lom = new Path(pathId, null, usuario); 
    const data = await lom.get();
		
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
