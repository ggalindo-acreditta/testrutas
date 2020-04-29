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

const dataTypeValidator = require('../helpers/model-validator')();
const uuid = require('../helpers/uuid');
const randomString = require('../helpers/random-string');
const _ = require('lodash');

const options = {};

const schemaValidatorError = {
  code: {type: 'string', required: true},
  message: {type: 'string', required: true}
};

exports.options = options;
exports.chai = chai;
exports.expect = chai.expect;
exports.sql = sql;
exports.db = db;
exports.pgp = pgp;
exports.dataTypeValidator = dataTypeValidator;
exports._ = _;
exports.uuid = uuid;
exports.randomString = randomString;
exports.schemaValidatorError = schemaValidatorError;
