'use strict';

const Element = require('../../models/element').Element;
const sessionError = require('../../helpers/error').session;
const maxSize = 2 * 1024 * 1024; // 2MB
const crypto = require('crypto');
const fs = require('fs');

const PATH_ELEMENT_IMAGE = process.env.PATH_ELEMENT_IMAGE;
const PATH_SERVIDOR = process.env.PATH_SERVIDOR;

module.exports = async (req, res) => { 
  var url = [req.baseUrl, req.path].join('');
  url = url.replace(/\/+$/, '');

  // Datos del usuario autenticado  
  var salida = {}; 
  var usuario = 0;  
  var elementId = 0;
  var sizeOf = require('image-size'); 

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
    const file = req.swagger.params.archivo.value; 
    const fileSize = file.size;
    const tipoArchivo = file.mimetype;
    const originalName = file.originalname;
    const fileExtension = file.originalname.split('.')[1];
    const nombreInterno = crypto.randomBytes(18).toString('hex') + '.' + fileExtension;
    const nombreArchivoTmp = PATH_ELEMENT_IMAGE + 'tmp_' + elementId + '.png';
    const nombreArchivo = PATH_ELEMENT_IMAGE + elementId + '.png';
    console.log('Element Tipo de archivo enviado (mimetype): ' + tipoArchivo);

    if (fileExtension.toLowerCase() !== 'png'){
      const salida = {
        status: 500,
        message: 'El archivo de Imagen debe ser de tipo image/png',
        code: 'E0004',
        errors: []
      };
      res.status(salida.status);
      return res.json(salida);
    } 
    if (tipoArchivo.toLowerCase() !== 'image/png'){
      const salida = {
        status: 500,
        message: 'El formato de la Imagen debe ser de tipo image/png',
        code: 'PT004',
        errors: []
      };
      res.status(salida.status);
      return res.json(salida);
    } 
    if (fileSize > maxSize){
      const salida = {
        status: 500,
        message: 'El tamaño del archivo excede lo permitido (2Mb)',
        code: 'E0005',
        errors: []
      };
      res.status(salida.status);
      return res.json(salida);      
    }  

    fs.writeFile(nombreArchivoTmp, file.buffer, async function(err) {
      if (err) {
        const salida = {
          status: 500,
          message: 'La imagen no pudo ser guardada',
          code: 'E0006',
          errors: []
        };
        res.status(salida.status);
        return res.json(salida);
      } else { 
        var dimensions = sizeOf(nombreArchivoTmp);
        if (dimensions.width !== dimensions.height){
          const salida = {
            status: 500,
            message: 'La proporcion de la imagen debe ser cuadrada (1:1)',
            code: 'E0012',
            errors: []
          };
          res.status(salida.status);
          return res.json(salida);
        }
        if (dimensions.width < 600){
          const salida = {
            status: 500,
            message: 'La imagen de tener un ancho minimo de 600px',
            code: 'E0013',
            errors: []
          };
          res.status(salida.status);
          return res.json(salida);
        }
        if (dimensions.height < 600){
          const salida = {
            status: 500,
            message: 'La imagen de tener un alto minimo de 600px',
            code: 'E0014',
            errors: []
          };
          res.status(salida.status);
          return res.json(salida);
        } 
        
        /*
        fs.stat(nombreArchivo, function(err) {
          if (!err) { 
            fs.unlinkSync(nombreArchivo);
          }; 
        });
        */
        fs.rename(nombreArchivoTmp, nombreArchivo, function(err) {
          if (err) { 
            const salida = {
              status: 500,
              message: 'La imagen no pudo ser guardada',
              code: 'E0006',
              errors: []
            };
            res.status(salida.status);
            return res.json(salida);
          }; 
        });

        const lom = new Element(elementId, null, usuario); 
        const data = await lom.updateImageUrl(PATH_SERVIDOR);  
        salida = {
          status: 200,
          message: 'Success'
        };
        res.status(200);
        return res.json(salida);
      }
    });
  } catch (err) {
    salida = {
      status: 500,
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
