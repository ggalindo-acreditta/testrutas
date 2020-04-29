'use strict';

const User = require('../../models/users').User;
var sessionError = require('../../helpers/error').session; 

module.exports = async (req, res) => { 
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado    
  var code = '';
  var salida = {};  

  code = req.swagger.params.code.value ? req.swagger.params.code.value : ''; 
  try {
    const lom = new User(null); 
    const data = await lom.getInvite(code);
		
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
