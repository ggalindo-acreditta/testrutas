'use strict';

class ModelError extends Error {
  constructor(errObject) {
    super(errObject.message);
    this.name = this.constructor.name;
    this.code = errObject.code;
    this.message = errObject.message;
    this.vendor = errObject.vendor || {};
    Error.captureStackTrace(this, this.constructor);
  }
}

class ModelDataTypeError extends ModelError {
  constructor(errObject) {
    super(errObject.message);
    this.name = this.constructor.name;
    this.code = errObject.code;
    this.message = errObject.message;
    this.vendor = errObject.vendor || {};
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  ModelError,
  ModelDataTypeError
};
