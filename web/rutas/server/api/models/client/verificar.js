'use strict';

const sql = require('../../db/sql').client;
const db = require('../../db').db;
const registerError = require('../../helpers/error').api;
const dataTypeValidator = require('../../helpers/model-validator')();
const _ = require('lodash');
const {ModelError, ModelDataTypeError} = require('../../errors/model-error');

const verifyCode = async function verifyCode(values) {
  const schemaValidator = {
    key: {type: 'string', required: true}
  };

  const dataTypeError = dataTypeValidator(values, schemaValidator);
  if (!_.isEmpty(dataTypeError)) {
    throw new ModelDataTypeError(dataTypeError);
  }

  try {
    const data = await db.oneOrNone(sql.verifyClient, values);
    let lValues = {};
    if (data) {
      lValues = {
        key: data.secret,
        name: data.nombre
      };
      return lValues;
    } else {
      const lError = registerError.A0002;
      const salida = {
        code: lError.code,
        message: lError.message
      };
      throw new ModelError(salida);
    }
  } catch (error) {
    if (error instanceof ModelError) {
      throw error;
    }
    const lError = registerError.A9999;
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
};

module.exports = verifyCode;
