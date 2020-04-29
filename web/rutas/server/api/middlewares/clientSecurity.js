'use strict';

const apiError = require('../helpers/error').api;
const redis = require('redis');
const clientModel = require('../models/client');
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const redisGetAsync = promisify(client.get).bind(client);
const redisSetAsync = promisify(client.set).bind(client);
const {ClientSecurityError} = require('../errors/client-security-error');

// Todos los endpoints que entren por este middleware deben tener un header con el token del cliente
module.exports = async (req, def, scopes, next) => {
  // console.log('CLIENT SECURITY');
  // console.log(req.swagger.security);
  // console.log(req.swagger.operation);
  // Datos del usuario autenticado
  // const scope = req.swagger.operation['x-client-security-scope'] || [];
  let salida = {};
  let errredis;
  let reply;
  const token = req.headers.clientkey;
  // console.log(scope);
  // console.log('Token en cabecera');
  // console.log(token); 
  
  // Tomar los valores de la sesion
  if (!token) {
    salida = {
      status: 403,
      message: apiError.A0002.message,
      code: apiError.A0002.code,
      errors: []
    };
    return next(new ClientSecurityError(salida));
  }

  if (token) {
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      // console.log('Token JWT decodificado');
      // console.log(decoded);
      try {
        // console.log("a consultar a redis pir el token");
        reply = await redisGetAsync(decoded.key);
        // console.log("ya se consulto redis");
        // console.log(reply);
      } catch (err) {
        // console.log("error al consultar redis");
        // console.log(err2);
        errredis = err;
      }
      // console.log("consultando redis");
      // console.log(reply);
      // console.log(errredis);
      if (errredis || reply === null) {
        // Verificar por DB
        // console.log("consultando BD");
        const data = await clientModel.verificar({
          key: decoded.key
        });
        // console.log(data);
        await redisSetAsync(data.key, data.name);
        // console.log("registrando en resdis el tokern");
        // console.log("TOKEN CLIENTE VALIDO");
        next();
      } else {
        // console.log("TOKEN CLIENTE VALIDO");
        next();
      }
    } catch (err) {
      // console.log('Error general');
      // console.log(err);
      salida = {
        status: 403,
        message: apiError.A0002.message,
        code: apiError.A0002.code,
        errors: []
      };
      return next(new ClientSecurityError(salida));
    }
  }
};
