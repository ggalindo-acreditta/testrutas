'use strict';
const {ModelError} = require('../../errors/model-error');
const Response = require('../../models/response').Response; 
const pathError = require('../../helpers/error').path;
const QueryFilterSort = require('../../helpers/query-filter-sort');
const dataTypeValidator = require('../../helpers/model-validator')(); 
const sql = require('../../db/sql');
const db = require('../../db').db;
var _ = require('lodash');

class Path {
  constructor(id, name, user) {
    this.id= id;
    this.name= name;
    this.user= user;
  }

  async list(query){    
    var dataSchema = {};
    var queryFilterSort;
    var qLimit = query.limit || 20;
    var qOffset = query.offset || 0;
    try{ 
      // Metadata para efectuar el filter y sort 
      dataSchema = {
        name: {type: "string", src: "name"}, 
        description: {type: "string",src: "description"},
        skills: {type: "string", src: "skills"},
        tags: {type: "string", src: "tags"},
        criterion: {type: "string", src: "criterion"},
        materiality: {type: "string", src: "materiality"},
        difficulty: {type: "string", src: "difficulty"},
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
      const data= await db.any(sql.path.list, sqlparams);  
      return data;
    } catch (error) {    
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999;
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
    var varNode= {};
    var varPath= [];
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
      const data= await db.one(sql.path.get, sqlparams); 
      const dataTree= await db.any(sql.path.tree, sqlparams); 
      
      if (data){
        data.tree= [];
        varNode= {
          id: data.element_tree_id,
          element_id: data.element_id,
          parent_element_id: 0,
          parent_id: 0,
          x: data.x,
          y: data.y,
          width: data.width,
          high: data.high
        };
        varPath.push(varNode);
        for (let i=0; i<varPath.length; i++) { 
          for (let j=0; j<dataTree.length; j++) {
            if (dataTree[j].parent_id == varPath[i].id) { 
              const resultado = varPath.find( x => x.id === dataTree[j].id);
              if (resultado == undefined) {    
                varNode= {
                  id: dataTree[j].id,
                  element_id: dataTree[j].element_id,
                  parent_element_id: dataTree[j].parent_element_id,
                  parent_id: dataTree[j].parent_id,
                  x: dataTree[j].x,
                  y: dataTree[j].y,
                  width: dataTree[j].width,
                  high: dataTree[j].high
                };
                varPath.push(varNode);
              }  
            }
          }
        }
        data.tree = varPath;
      }

      return data;
    } catch (error) {   
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999;
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
        description: {type: 'string'},
        skills: {type: 'string'},
        tags: {type: 'string'}, 
        criterion: {type: 'string'},
        materiality: {type: 'string', required: true},
        difficulty: {type: 'string', required: true},
        image_url: {type: 'string'},
        expire_at: {type: 'date'},
        score: {type: 'integer', required: true},
        language: {type: 'string', required: true}
      }; 
      var dataTypeError = dataTypeValidator(values, schemaValidator);
      if (!_.isEmpty(dataTypeError)) {
        lresponse= new Response(400, 'fail', dataTypeError.message, this.id);
        return (lresponse);
      } 

      // Fija los parametros de la consulta
      const sqlparams= { 
        name: values.name,
        description: values.description ? values.description : '',
        skills: values.skills ? values.skills : '',
        tags: values.tags ? values.tags : '',
        criterion: values.criterion ? values.criterion : '',
        materiality: values.materiality ? values.materiality : '',
        difficulty: values.difficulty ? values.difficulty : '',
        image_url: values.image_url ? values.image_url : '',
        expire_at: values.expire_at ? values.expire_at : null,
        score: values.score,
        language: values.language,        
        parent: values.tree.parent,       
        element: values.tree.element,      
        x: values.tree.x,      
        y: values.tree.y,      
        width: values.tree.width,      
        high: values.tree.high, 
        usuario: this.user
      };             
      const data= await db.one(sql.path.post, sqlparams); 
      if (data.error === '') {     
        lresponse= new Response(200, 'success', 'Ruta Registrada', data.id_path)
      }else{
        var lError = pathError[data.error];   
        lresponse= new Response(500, 'fail', lError.message, data.id_path)
      } 
      return lresponse;
    } catch (error) {  
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999; 
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
        description: {type: 'string'},
        skills: {type: 'string'},
        tags: {type: 'string'}, 
        criterion: {type: 'string'},
        materiality: {type: 'string', required: true},
        difficulty: {type: 'string', required: true},
        image_url: {type: 'string'},
        expire_at: {type: 'date'},
        score: {type: 'integer', required: true},
        language: {type: 'string', required: true}
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
        description: values.description ? values.description : '',
        skills: values.skills ? values.skills : '',
        tags: values.tags ? values.tags : '',
        criterion: values.criterion ? values.criterion : '',
        materiality: values.materiality ? values.materiality : '',
        difficulty: values.difficulty ? values.difficulty : '',
        image_url: values.image_url ? values.image_url : '',
        expire_at: values.expire_at ? values.expire_at : null,
        score: values.score,
        language: values.language,        
        parent: values.tree.parent,       
        element: values.tree.element,      
        x: values.tree.x,      
        y: values.tree.y,      
        width: values.tree.width,      
        high: values.tree.high, 
        usuario: this.user
      };              
      const data= await db.one(sql.path.put, sqlparams);  
      if (data.error === '') {     
        lresponse= new Response(200, 'success', 'Ruta Actualizada', this.id)
      }else{
        var lError = pathError[data.error];   
        lresponse= new Response(500, 'fail', lError.message, this.id)
      } 
      return lresponse;
    } catch (error) {  
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999; 
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
      const data= await db.one(sql.path.delete, sqlparams);  
      if (data.error === '') {     
        lresponse= new Response(200, 'success', 'Ruta Eliminada', this.id)
      }else{
        var lError = pathError[data.error];   
        lresponse= new Response(500, 'fail', lError.message, this.id)
      } 
      return lresponse;
    } catch (error) {   
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999;
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
      await db.any(sql.path.updateImageUrl, sqlparams); 
      lresponse= new Response(200, 'success', 'Imagen Actualizada', this.id)
      return lresponse;
    } catch (error) { 
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999;
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
      await db.any(sql.path.clearImageUrl, sqlparams); 
      lresponse= new Response(200, 'success', 'Imagen Eliminada', this.id)
      return lresponse;
    } catch (error) { 
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = pathError.PT999;
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

module.exports = Path;