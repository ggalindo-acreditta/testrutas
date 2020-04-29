'use strict';

const session = require('../helpers/error').session;
const userError = require('../helpers/error').usuario;
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const {UserSecurityError} = require('../errors/user-security-error');

// Todos los endpoints que entren por este middleware deben tener un header con el token del cliente
module.exports = async (req, def, scopes, next) => {
  // console.log('CLIENT SECURITY');
  // console.log(req.swagger.security);
  // console.log(req.swagger.operation);
  // Datos del usuario autenticado
  const currentScopes = req.swagger.operation['x-security-scopes'] || [];
  let salida = {};
  const token = req.headers.authorization;
  //next();
  if (!token) {
    salida = {
      status: 403,
      message: session.S0002.message,
      code: session.S0002.code,
      errors: []
    };
    return next(new UserSecurityError(salida));
  }

  try {
    const payload= await jwt.verify(token, process.env.JWT_SECRET);
    if (req.session.token !== token) {
      salida = {
        status: 403,
        message: session.S0001.message,
        code: session.S0001.code,
        errors: []
      };
      return next(new UserSecurityError(salida));
    }

    // Valida si el usuario tiene el scopes definido en el swagger
    if (_.intersection(payload.scopes, currentScopes).length == 0) {
      salida = {
        status: 401,
        message: userError.U0002.message,
        code: userError.U0002.code,
        errors: []
      };
      return next(new UserSecurityError(salida));
    }
    next();
  } catch (err) {
    salida = {
      status: 403,
      message: session.S9999.message,
      code: session.S9999.code,
      errors: []
    };
    return next(new UserSecurityError(salida));
  }
};
