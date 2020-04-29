'use strict';
const {ModelError} = require('../../errors/model-error');
const Response = require('../../models/response').Response; 
const elementError = require('../../helpers/error').element;
const QueryFilterSort = require('../../helpers/query-filter-sort');
const dataTypeValidator = require('../../helpers/model-validator')(); 
const sql = require('../../db/sql');
const db = require('../../db').db;
var _ = require('lodash');

class User {
  constructor(id) {
    this.id= id;
    this.firstname= '';
    this.lastname= '';
    this.email= '';
    this.type= '';
    this.status= '';
    this.organization_id= 0;
  }

  async get(){ 
    try{
      let lresponse; 
      // Valida los parametros de Entrada
      var schemaValidator = {
        id: {type: 'integer', required: true}
      }; 
      var dataTypeError = dataTypeValidator(this, schemaValidator);      
      if (!_.isEmpty(dataTypeError)) {  
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);  
        return (lresponse);
      }

      // Fija los parametros de la consulta
      const sqlparams= {
        id: this.id
      };             
      const data= await db.one(sql.user.get, sqlparams); 
      return data;
    } catch (error) {   
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = elementError.E9999;
      const salida = {
        code: lError.code,
        message: lError.message,
        vendor: {
          code: error.code ? String(error.code) : lError.code,
          message: error.message ? error.message : lError.message
        }
      };
      throw new ModelError(salida);
    }
  }

  async getInvite(code){ 
    try{
      let lresponse; 
      // Fija los parametros de la consulta
      const sqlparams= {
        code: code
      };             
      const data= await db.one(sql.user.getInvite, sqlparams); 
      return data;
    } catch (error) {   
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = elementError.E9999;
      const salida = {
        code: lError.code,
        message: lError.message,
        vendor: {
          code: error.code ? String(error.code) : lError.code,
          message: error.message ? error.message : lError.message
        }
      };
      throw new ModelError(salida);
    }
  }

  async disConnect(){ 
    try{
      let lresponse; 
      // Valida los parametros de Entrada
      var schemaValidator = {
        id: {type: 'integer', required: true}
      }; 
      var dataTypeError = dataTypeValidator(this, schemaValidator);      
      if (!_.isEmpty(dataTypeError)) {  
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);  
        return (lresponse);
      }

      // Fija los parametros de la consulta
      const sqlparams= {
        id: this.id
      };                        
      const data= await db.any(sql.user.disconnect, sqlparams); 
      lresponse= new Response(200, 'success', 'Usuario desconectado', this.id);
      return lresponse;
    } catch (error) {   
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = elementError.E9999;
      const salida = {
        code: lError.code,
        message: lError.message,
        vendor: {
          code: error.code ? String(error.code) : lError.code,
          message: error.message ? error.message : lError.message
        }
      };
      throw new ModelError(salida);
    }
  }
}

module.exports = User;