'use strict';
var User = require('../../models/users');
var sessionError = require('../../helpers/error').session; 
var registroError = require('../../helpers/error').registro; 
var mailer = require('../../helpers/mailer.js');
var crypto = require('crypto');

module.exports = function(req, res) {
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado   
  var code = '';
  var token = '';
  var salida = {};
  var detalle = {};
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

  if (organization === 0){
    salida = {
      status: 400,
      statusCode: 'fail',
      message: registroError.AC015.message,
      code: registroError.AC015.code,
      errors: []
    };
    res.status(salida.status).json(salida).end(); 
  }
 
  try {    
    salida = {
      status: 201,
      statusCode: "success",
      message: "Usuario Invitado con exito",
      errors: []
    };

    if (req.body.guests) {
      User.invite(usuario, req.body.guests, function(err, data) { 
        if (err){
          salida.status= 500;
          salida.statusCode= err.code;
          salida.message= err.message;
          res.status(salida.status).json(salida).end(); 
        }
        else if (!err && data) {
          for (var i = 0; i < data.errors.length; i++) {     
            if (data.errors[i].status === 201){
              code = crypto.randomBytes(3).toString('hex');
  
              // Se envia el correo de Invitacion
              var template = "invitacion";
              var subjectCorreo = "Invitación a colaborar en Rutas Acreditta";
              var dataMsg = {"email": data.errors[i].email, "code": code, "token": data.errors[i].token, "url": process.env.INVITE_URL, "logo": process.env.LOGO_URL};
              mailer.sendTextEmailToAddress(1, data.errors[i].email.toLowerCase(), subjectCorreo, template, dataMsg);                
            }
          }          
          salida.status = data.status,
          salida.statusCode = data.statusCode,
          salida.message = data.message,
          salida.errors = data.errors;
          res.status(salida.status).json(salida).end(); 
        }           
      }); 
    }  
  } catch (err) {
    salida.status = 500;
    salida.statusCode = 'fail';
    salida.message = err.message;
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
