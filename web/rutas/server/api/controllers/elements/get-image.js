'use strict';

const Element = require('../../models/element').Element;
var sessionError = require('../../helpers/error').session; 
var elementError = require('../../helpers/error').element; 
const request = require('request');
var String = require('string');
const fs = require('fs');

const PATH_ELEMENT_IMAGE= process.env.PATH_ELEMENT_IMAGE;
const PATH_SERVIDOR = process.env.PATH_SERVIDOR;

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = async (req, res) => {
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');
 
  // Datos del usuario autenticado  
  var salida = {}; 
  var usuario = 0;  
  var elementId = 0;

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
  elementId = req.swagger.params.id.value ? req.swagger.params.id.value : 0; 

  try {
    const lom = new Element(elementId, null, usuario); 
    const data = await lom.get();
 
    if (!data || typeof data.id === 'undefined'){
      salida = {
        status: 404,
        message: elementError.E0003.message,
        code: elementError.E0003.code,
        errors: []
      };
      res.status(404);
      return res.json(salida);
    } else {
      const nombreArchivo = data.name;
      const nombreInterno = elementId + '.png';

      var sub = process.env.PATH_SERVIDOR;//'https://dev.rutas.binwus.com';
      var phrase = String(data.image_url);
      var pos = phrase.indexOf(sub);

      if (pos !== 0){
        console.log('URL');
        download(data.image_url, PATH_ELEMENT_IMAGE + nombreInterno, function(){
          fs.stat(PATH_ELEMENT_IMAGE + nombreInterno, function(err) {
            if (err) {
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
            else {
              res.status(200);
              res.set('Content-Type', 'image/png');
              return res.download(PATH_ELEMENT_IMAGE + nombreInterno, nombreArchivo)
            }
          });
        });
      }else{
        console.log('Local');
        fs.stat(PATH_ELEMENT_IMAGE + nombreInterno, function(err) {
          if (err) {
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
          else {
            res.status(200);
            res.set('Content-Type', 'image/png');
            return res.download(PATH_ELEMENT_IMAGE + nombreInterno, nombreArchivo)
          }
        });
      }
    }
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
