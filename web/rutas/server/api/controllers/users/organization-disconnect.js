'use strict';

const User = require('../../models/users').User;
var sessionError = require('../../helpers/error').session; 

module.exports = async (req, res) => { 
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado    
  var userId = 0;
  var salida = {}; 
  var usuario = 0;
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

  try {
    const lom = new User(usuario); 
    const data = await lom.disConnect();  
    if (req.session && typeof organization !== 'undefined' ) { 
      req.session.organization = 0;
    }
 
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
