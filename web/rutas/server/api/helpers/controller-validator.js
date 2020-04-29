'use strict';

var Ajv = require('ajv');
var localize = require('ajv-i18n');
var ajv = new Ajv({allErrors: true});
var _ = require('lodash');
var apiModelError = require('./error').apiModel;

/**
 * Obtiene
 * @param {Object} opt  Opciones de validacion
 *
 * @constructor
 */
function ControllerValidator(opt) {
  opt = opt || {};
  var defaults = {
    locale: 'es',
    jsonPointers: true
  };
  _.defaults(opt, defaults);

  this.options = opt;
  this.validate = {};
  this.errors = [];
}

ControllerValidator.prototype.validateData = function(schema, data) {
  this.errors = [];
  this.validate = ajv.compile(schema);
  var valid = this.validate(data);
  if (!valid) {
    switch (this.options.locale) {
      case 'de':
        localize.de(this.validate.errors);
        break;
      case 'en':
        localize.en(this.validate.errors);
        break;
      case 'hu':
        localize.hu(this.validate.errors);
        break;
      case 'it':
        localize.it(this.validate.errors);
        break;
      case 'ja':
        localize.ja(this.validate.errors);
        break;
      case 'pl':
        localize.pl(this.validate.errors);
        break;
      case 'ru':
        localize.ru(this.validate.errors);
        break;
      case 'es':
        localize.es(this.validate.errors);
        break;
      case 'sv':
        localize.sv(this.validate.errors);
        break;
      case 'zh':
        localize.zh(this.validate.errors);
        break;
      default:
        localize.es(this.validate.errors);
    }
    this.errors = this.validate.errors;
  }

  return valid;
};

ControllerValidator.prototype.getErrors = function() {
  var error = {
    code: '',
    message: '',
    vendor: {
      code: '',
      message: '',
      label: '',
      errors: []
    }
  };
  var messageList = [];
  var i;
  var detError = {};
  if (this.errors.length > 0) {
    error.code = apiModelError.AM009.code;
    error.message = apiModelError.AM009.message;
    for (i = 0; i < this.errors.length; i++) {
      detError = {
        code: this.errors[i].keyword,
        message: this.errors[i].message,
        label: this.errors[i].dataPath.split('/').pop().split('.').pop()
      };
      messageList.push([this.errors[i].dataPath, ': ', this.errors[i].message].join(''));
      /* eslint-disable no-fallthrough */
      /* eslint-disable default-case */
      switch (this.errors[i].keyword) {
        case "format":
          switch (this.errors[i].params.format) {
            case "date":
              detError.code = apiModelError.AM013.code;
              detError.message = apiModelError.AM013.message;
              break;
            case "date-time":
              detError.code = apiModelError.AM002.code;
              detError.message = apiModelError.AM002.message;
              break;
            case "email":
              detError.code = apiModelError.AM011.code;
              detError.message = apiModelError.AM011.message;
              break;
            case "uuid":
              detError.code = apiModelError.AM007.code;
              detError.message = apiModelError.AM007.message;
              break;
            case "url":
              detError.code = apiModelError.AM014.code;
              detError.message = apiModelError.AM014.message;
              break;
            case "uri":
              detError.code = apiModelError.AM015.code;
              detError.message = apiModelError.AM015.message;
              break;
          }
          break;
        case "required":
          detError.code = apiModelError.AM001.code;
          detError.message = apiModelError.AM001.message;
          detError.label = detError.label === '' ? this.errors[i].params.missingProperty :
            [detError.label, this.errors[i].params.missingProperty].join('.');
          break;
        case "type":
          switch (this.errors[i].params.type) {
            case "string":
              detError.code = apiModelError.AM003.code;
              detError.message = apiModelError.AM003.message;
              break;
            case "number":
              detError.code = apiModelError.AM004.code;
              detError.message = apiModelError.AM004.message;
              break;
            case "integer":
              detError.code = apiModelError.AM005.code;
              detError.message = apiModelError.AM005.message;
              break;
            case "boolean":
              detError.code = apiModelError.AM006.code;
              detError.message = apiModelError.AM006.message;
              break;
            case "array":
              detError.code = apiModelError.AM016.code;
              detError.message = apiModelError.AM016.message;
              break;
            case "object":
              detError.code = apiModelError.AM017.code;
              detError.message = apiModelError.AM017.message;
              break;
            default:
              detError.code = apiModelError.AM009.code;
              detError.message = this.errors[i].message;
              break;
          }
          break;
        // Para string
        case "maxLength": case "minLength": case "pattern":
        // Para number
        case "maximum": case "minimum": case "exclusiveMaximum": case "exclusiveMinimum": case "multipleOf":
        // Para arrays
        case "maxItems": case "minItems": case "uniqueItems": case "items": case "additionalItems": case "contains":
        // Para objects
        case "maxProperties": case "minProperties": case "properties": case "patternProperties":
        // Para todos los tipos
        case "enum": case "const":
        // Para tipos compuestos
        case "not": case "oneOf": case "anyOf": case "allOf":
          detError.code = apiModelError.AM009.code;
          detError.message = this.errors[i].message;
          break;
      }
      /* eslint-enable default-case */
      /* eslint-enable no-fallthrough */
      error.vendor.errors.push(detError);
    }
    error.vendor.code = apiModelError.AM009.code;
    error.vendor.message = messageList.join('; ');
  } else {
    error = {};
  }
  return error;
};

ControllerValidator.prototype.maxDecimal = 99999999999999.999999;

ControllerValidator.prototype.dateTimePattern = '^\\d{4}-\\d{2}-\\d{2}\\s{1}\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?$';

ControllerValidator.prototype.setOptions = function(options) {
  options = options || {};
  var defaults = {
    locale: 'es'
  };
  _.defaults(options, defaults);

  this.options = options;
};

module.exports = ControllerValidator;
