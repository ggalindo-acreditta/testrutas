'use strict';
const {ModelError} = require('../../errors/model-error');
const Response = require('../../models/response').Response; 
const elementError = require('../../helpers/error').element;
const QueryFilterSort = require('../../helpers/query-filter-sort');
const dataTypeValidator = require('../../helpers/model-validator')(); 
const sql = require('../../db/sql');
const db = require('../../db').db;
var _ = require('lodash');

class Element {
  constructor(id, name, user) {
    this.id= id;
    this.name= name;
    this.user= user;
  }

  async list(query, usuario){  
    var dataSchema = {};
    var queryFilterSort;
    var qLimit = query.limit || 20;
    var qOffset = query.offset || 0;
    try{ 
      // Metadata para efectuar el filter y sort 
      dataSchema = {
        name: {type: "string", src: "name"},
        issuer: {type: "string", src: "issuer"},
        category: {type: "string", src: "category"},
        duration: {type: "integer", src: "duration"},
        description: {type: "string",src: "description"},
        skills: {type: "string", src: "skills"},
        tags: {type: "string", src: "tags"},
        criterion: {type: "string", src: "criterion"},
        materiality: {type: "string", src: "materiality"},
        score: {type: "integer", src: "score"}, 
        language: {type: "string", src: "language"} 
      }; 
 
      queryFilterSort = new QueryFilterSort(query, dataSchema);
      qOffset = queryFilterSort.getOffset();
      qLimit = queryFilterSort.getLimit(); 

      // Fija los parametros de la consulta
      const sqlparams= {
        offset: qOffset,
        limit: qLimit, 
        from: queryFilterSort.getFrom(),
        to: queryFilterSort.getTo(),
        sort: queryFilterSort.getSort(),
        filter: queryFilterSort.getFilter(),
        usuario: this.user
      };        
      const data= await db.any(sql.element.list, sqlparams);  
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

  async get(){ 
    try{
      let lresponse; 
      // Valida los parametros de Entrada
      var schemaValidator = {
        id: {type: 'integer', required: true},
        user: {type: 'integer', required: true} 
      }; 
      var dataTypeError = dataTypeValidator(this, schemaValidator);      
      if (!_.isEmpty(dataTypeError)) {  
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);  
        return (lresponse);
      }

      // Fija los parametros de la consulta
      const sqlparams= {
        id: this.id,
        usuario: this.user
      };             
      const data= await db.one(sql.element.get, sqlparams); 
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

  async post(values){
    try{
      let lresponse;    
      // Valida los parametros de Entrada 
      var schemaValidator = {  
        name: {type: 'string', required: true},
        issuer: {type: 'string'},
        issuer_url: {type: 'string'},
        category: {type: 'string'},
        duration: {type: 'integer'},
        description: {type: 'string'},
        skills: {type: 'string'},
        tags: {type: 'string'}, 
        criterion: {type: 'string'},
        materiality: {type: 'string', required: true},
        score: {type: 'integer', required: true},
        image_url: {type: 'string'},
        expire_at: {type: 'date'},
        language: {type: 'string', required: true},
        badge_id: {type: 'string'},
        level: {type: 'string'}
      }; 
      var dataTypeError = dataTypeValidator(values, schemaValidator);
      if (!_.isEmpty(dataTypeError)) {
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);
        return (lresponse);
      } 

      // Fija los parametros de la consulta
      const sqlparams= { 
        name: values.name,
        issuer: values.issuer ? values.issuer : '',
        issuer_url: values.issuer_url ? values.issuer_url : '',
        category: values.category ? values.category : '',
        duration: values.duration ? values.duration : 0,
        description: values.description ? values.description : '',
        skills: values.skills ? values.skills : '',
        tags: values.tags ? values.tags : '',
        criterion: values.criterion ? values.criterion : '',
        materiality: values.materiality ? values.materiality : '',
        score: values.score,
        image_url: values.image_url ? values.image_url : '',
        expire_at: values.expire_at ? values.expire_at : null,
        language: values.language,
        badge_id: values.badge_id ? values.badge_id : '',
        level: values.level ? values.level : null,
        usuario: this.user
      };              
      const data= await db.one(sql.element.post, sqlparams);  
      if (data.error === '') {     
        lresponse= new Response(200, 'success', 'Elemento Registrado', data.id_element)
      }else{
        var lError = elementError[data.error];   
        lresponse= new Response(500, 'fail', lError.message, data.id_element)
      } 
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

  async put(values){
    try{
      let lresponse;    
      // Valida los parametros de Entrada 
      var schemaValidator = {  
        id: {type: 'integer', required: true},
        name: {type: 'string', required: true},
        issuer: {type: 'string'},
        issuer_url: {type: 'string'},
        category: {type: 'string'},
        duration: {type: 'integer'},
        description: {type: 'string'},
        skills: {type: 'string'},
        tags: {type: 'string'}, 
        criterion: {type: 'string'},
        materiality: {type: 'string', required: true},
        score: {type: 'integer', required: true},
        image_url: {type: 'string'},
        expire_at: {type: 'date'},
        language: {type: 'string', required: true},
        badge_id: {type: 'string'},
        level: {type: 'string'}
      }; 
      var dataTypeError = dataTypeValidator(values, schemaValidator);
      if (!_.isEmpty(dataTypeError)) {   
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);
        return (lresponse);
      } 

      // Fija los parametros de la consulta
      const sqlparams= { 
        id: values.id,
        name: values.name,
        issuer: values.issuer ? values.issuer : '',
        issuer_url: values.issuer_url ? values.issuer_url : '',
        category: values.category ? values.category : '',
        duration: values.duration ? values.duration : 0,
        description: values.description ? values.description : '',
        skills: values.skills ? values.skills : '',
        tags: values.tags ? values.tags : '',
        criterion: values.criterion ? values.criterion : '',
        materiality: values.materiality ? values.materiality : '',
        score: values.score,
        image_url: values.image_url ? values.image_url : '',
        expire_at: values.expire_at ? values.expire_at : null,
        language: values.language,
        badge_id: values.badge_id ? values.badge_id : '',
        level: values.level ? values.level : null,
        usuario: this.user
      };              
      const data= await db.one(sql.element.put, sqlparams);  
      if (data.error === '') {     
        lresponse= new Response(200, 'success', 'Elemento Actualizado', this.id)
      }else{
        var lError = elementError[data.error];   
        lresponse= new Response(500, 'fail', lError.message, this.id)
      } 
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

  async delete(){
    try{
      let lresponse; 
      // Valida los parametros de Entrada
      var schemaValidator = {
        id: {type: 'integer', required: true},
        user: {type: 'integer', required: true} 
      }; 
      var dataTypeError = dataTypeValidator(this, schemaValidator);      
      if (!_.isEmpty(dataTypeError)) {  
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);  
        return (lresponse);
      }

      // Fija los parametros de la consulta
      const sqlparams= {
        id: this.id,
        usuario: this.user
      };                        
      const data= await db.one(sql.element.delete, sqlparams);  
      if (data.error === '') {     
        lresponse= new Response(200, 'success', 'Elemento Eliminado', this.id)
      }else{
        var lError = elementError[data.error];   
        lresponse= new Response(500, 'fail', lError.message, this.id)
      } 
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

  async updateImageUrl(path){
    try{
      let lresponse; 
      // Valida los parametros de Entrada
      var schemaValidator = {
        id: {type: 'integer', required: true},
        user: {type: 'integer', required: true} 
      }; 
      var dataTypeError = dataTypeValidator(this, schemaValidator);      
      if (!_.isEmpty(dataTypeError)) {  
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);  
        return (lresponse);
      } 

      // Fija los parametros de la consulta
      const sqlparams= {
        path: path,
        id: this.id,
        usuario: this.user
      };             
      await db.any(sql.element.updateImageUrl, sqlparams); 
      lresponse= new Response(200, 'success', 'Imagen Actualizada', this.id)
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

  async ClearImageUrl(){
    try{
      let lresponse; 
      // Valida los parametros de Entrada
      var schemaValidator = {
        id: {type: 'integer', required: true},
        user: {type: 'integer', required: true} 
      }; 
      var dataTypeError = dataTypeValidator(this, schemaValidator);      
      if (!_.isEmpty(dataTypeError)) {  
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);  
        return (lresponse);
      } 

      // Fija los parametros de la consulta
      const sqlparams= {
        id: this.id,
        usuario: this.user
      };             
      await db.any(sql.element.clearImageUrl, sqlparams); 
      lresponse= new Response(200, 'success', 'Imagen Eliminada', this.id)
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

module.exports = Element;