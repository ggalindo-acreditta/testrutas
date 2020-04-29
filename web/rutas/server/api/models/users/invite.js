'use strict';

var sql = require('../../db/sql').user;
const {ModelError} = require('../../errors/model-error');
var registerError = require('../../helpers/error').registro;
var db = require('../../db').db;
var crypto = require('crypto');
var _ = require('lodash');

var invite = async function invite(usuario, values, fn) {
  var token = '';
  var result = [];
  var status = 201;
  var statusCode = 'success';
  var message = 'Usuario Invitado con exito';
  try{    
    for (let i=0; i<values.length; i++) {   
      // Fija los parametros de la consulta   
      let random = crypto.randomBytes(15).toString('hex');
      let a = crypto.createHmac("sha256", process.env.HASH_KEY);
      token = a.update(random).digest("hex");

      const sqlparams= {
        firstname: values[i].firstname ? values[i].firstname : '',
        lastname: values[i].lastname ? values[i].lastname : '',
        email: values[i].email,
        token: token,
        usuario: usuario
      };       
      const data= await db.one(sql.invite, sqlparams); 
      
      if (data.error === ''){
        var salida = {
          status: 201,
          statusCode: "success",
          message: "Usuario Invitado con exito",
          email: values[i].email,
          token: token
        };
        result.push(salida);
      }else{
        var lError = registerError[data.error];
        var salida = {
          status: 500,
          statusCode: lError.code,
          message: lError.message,
          email: data.email
        };
        status = 500;
        statusCode = 'fail';
        message = lError.message;
        result.push(salida);
      }
      result.push();
    }
    fn(null, {status: status, statusCode: statusCode, message: message, errors: result});    
  } catch (error) {  
    console.log(error);
    if (error instanceof ModelError) {
      throw error;
    }
    const lError = registerError.AC999;
    const salida = {
      code: lError.code,
      message: lError.message,
      vendor: {
        code: error.code ? String(error.code) : lError.code,
        message: error.message ? error.message : lError.message
      }
    };
    fn(salida);
  }  
};
module.exports = invite;
