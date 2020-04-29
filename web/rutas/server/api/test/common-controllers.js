'use strict';

process.env.TESTMODE = true;
require('../helpers/config-loader')();
const chai = require('chai');

// Load dirty chai first to hook plugin extensions
const dirtyChai = require('dirty-chai');
chai.use(dirtyChai);

const sql = require('./db/sql');
const db = require('../db').db;
const pgp = require('../db').pgp;
const _ = require('lodash');
const url = [process.env.SSL_PRIVATE_KEY === '' ? 'http://' : 'https://', 'localhost:', process.env.PORT].join('');
const apiBase = '/api/v1/';
const request = require('supertest');
const app = require('../app');
const agent = request.agent(url);
const ControllerValidator = require('../helpers/controller-validator');
const controllerValidator = new ControllerValidator();
const passwordHasher = require('../helpers/password-hasher');
const passwordComparer = require('../helpers/password-comparer');
const uuid = require('../helpers/uuid');
const randomString = require('../helpers/random-string');
const jwt = require('jsonwebtoken');

const options = {};
/**
 * Genera el Token del cliente para las pruebas
 *
 * @returns Token
 */
const getAuthClientKey = async () => {
  await db.none(sql.auth.generateAuthApplication);
  const appData = await db.one(sql.auth.getAuthApplication);
  const token = jwt.sign(
    {
      key: appData.secret
    },
    process.env.JWT_SECRET,
    {
      algorithm: 'HS256'
    }
  );
  return token;
};

exports.options = options;
exports.chai = chai;
exports.expect = chai.expect;
exports.sql = sql;
exports.db = db;
exports.pgp = pgp;
exports._ = _;
exports.request = request;
exports.app = app;
exports.agent = agent;
exports.url = url;
exports.apiBase = apiBase;
exports.uuid = uuid;
exports.controllerValidator = controllerValidator;
exports.passwordHasher = passwordHasher;
exports.passwordComparer = passwordComparer;
exports.randomString = randomString;
exports.jwt = jwt;
exports.getAuthClientKey = getAuthClientKey;
