'use strict';

/**
 * Module dependencies.
 * @private
 */

const redis = require('redis');
const Session = require('express-session');
const RedisStore = require('connect-redis')(Session);
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});
const sessionError = require('../helpers/error').session;

/**
 * Expose the middleware.
 */
module.exports = session;

/**
 * Configura la sesion con las opciones dadas
 * @param {Object} [options] Opciones
 * @param {String} [options.sessionSecret] Secret para la sesion
 * @param {Boolean} [options.sessionSaveUninitialized] Save uninitialized sessions to the store
 * @param {Boolean} [options.sessionResave] Resave unmodified sessions back to the store
 * @param {String} [options.redisHost] Servicio Redis, Host
 * @param {Integer} [options.redisPort] Servicio Redis, Port
 * @param {Integer} [options.redisTtl] Servicio Redis, ttl
 * @return {Function} middleware
 */
function session(options) {
  const lOptions = options || {};
  const sessionSecret = lOptions.sessionSecret || 'shhhhSecret';
  const sessionSaveUninitialized = lOptions.sessionSaveUninitialized || false;
  const sessionResave = lOptions.sessionResave || false;
  const redisHost = lOptions.redisHost || 'localhost';
  const redisPort = lOptions.redisPort || 6379;
  const redisTtl = lOptions.redisTtl || 86400;

  // Inicializar la sesion, se tiene 3 intentos para recuperarse
  /* eslint-disable new-cap */
  const sessionMiddleware = Session({
  /* eslint-disable new-cap */
    cookie: {
      maxAge: 86400 * 1000,
      secure: false
    },
    secret: sessionSecret,
    store: new RedisStore({host: redisHost, port: redisPort, client: redisClient, ttl: redisTtl}),
    saveUninitialized: sessionSaveUninitialized,
    resave: sessionResave
  });

  return function session(req, res, next) {
    let tries = 3;
    function lookupSession(error) {
      if (error) {
        return next(error);
      }
      tries -= 1;
      if (req.session !== undefined) {
        return next();
      }
      if (tries < 0) {
        // Ha ocurrido un error
        const salida = {
          statusCode: 500,
          status: 'fail',
          message: sessionError.S9999.message,
          code: sessionError.S9999.code,
          errors: []
        };
        res.status(salida.statusCode);
        return res.json(salida);
      }
      sessionMiddleware(req, res, lookupSession);
    }
    lookupSession();
  };
}
