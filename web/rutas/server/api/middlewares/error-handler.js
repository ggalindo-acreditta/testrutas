'use strict';

/**
 * Expose the middleware.
 */
module.exports = errorhandler;

/**
 Custom error handler
 * @return {Function} middleware
 */
function errorhandler() {
  return function errorhandler(err, req, res, next) {
    let error = {
      status: 0,
      message: '',
      code: '',
      errors: []
    };

    error.status = err.status || 400;
    error.message = err.message || err.code || 'NO MESSAGE ERROR';
    error.code = err.code || '';

    // Errores de swagger
    if (error.code === "SCHEMA_VALIDATION_FAILED") {
      for (var i = 0, len = err.results.errors.length; i < len; i++) {
        error.errors.push({
          code: err.results.errors[i].code,
          title: err.results.errors[i].message,
          detail: err.results.errors[i].message
        });
      }
    }
    if (err.vendor) {
      if (err.vendor.message) {
        error.errors.push(err.vendor.message);
      }
    }
    res.status(error.status);
    res.json(error);
  };
}
