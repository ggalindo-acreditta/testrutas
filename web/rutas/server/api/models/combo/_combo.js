'use strict';

const apiModelError = require('../../helpers/error').apiModel;
const Response = require('../../models/response').Response;
const dataTypeValidator = require('../../helpers/model-validator')();
const {ModelError} = require('../../errors/model-error');
const sql = require('../../db/sql').combo;
const db = require('../../db').db;
var _ = require('lodash');

var QueryFilterSort = require('../../helpers/query-filter-sort');

class Combo {
  constructor(usuario) {
    this.usuario_reg = usuario;
    this.difficulty= [];
    this.materiality= [];
  }

  async getDifficulty(values)
  {
    try{
      // Fija los parametros de la consulta
      const sqlparams= {
        usuario: this.usuario
      };
      const data= await db.any(sql.getDifficulty, sqlparams);
      return data;
    } catch (error) {
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = apiModelError.AM999;
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

  async getMateriality(values)
  {
    try{
      // Fija los parametros de la consulta
      const sqlparams= {
        usuario: this.usuario
      };
      const data= await db.any(sql.getMateriality, sqlparams);
      return data;
    } catch (error) {
      if (error instanceof ModelError) {
        throw error;
      }
      const lError = apiModelError.AM999;
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

module.exports = Combo;

