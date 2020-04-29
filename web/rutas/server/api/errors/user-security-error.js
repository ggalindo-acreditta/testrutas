'use strict';

class UserSecurityError extends Error {
  constructor(errObject) {
    super(errObject.message || errObject.toString());
    this.name = this.constructor.name;
    this.code = errObject.code;
    this.message = errObject.message;
    this.vendor = errObject.vendor;
    this.status = errObject.status;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  UserSecurityError
};
