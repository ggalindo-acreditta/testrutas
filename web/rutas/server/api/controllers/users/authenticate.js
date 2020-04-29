'use strict';

var User = require('../../models/users');
var ControllerValidator = require('../../helpers/controller-validator');
var userError = require('../../helpers/error').usuario;
var sessionError = require('../../helpers/error').session;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

module.exports = function(req, res) {
  var salida = {};
  var token;
  var schemaValidateInput = {};
  var schemaValidateInputError = {};
  var controllerValidator;
  controllerValidator = new ControllerValidator({locale: req.getLocale()});
  schemaValidateInput = {
    required: ['email', 'password'],
    properties: {
      email: {type: 'string', format: 'email', maxLength: 50, pattern: "^(?!\\s*$).+"},
      password: {type: 'string', maxLength: 50, pattern: "^(?!\\s*$).+"}
    }
  };

  if (!controllerValidator.validateData(schemaValidateInput, req.body)) {
    schemaValidateInputError = controllerValidator.getErrors();
    salida = {
      status: 400,
      statusCode: "error",
      message: schemaValidateInputError.message,
      code: schemaValidateInputError.code,
      errors: []
    };
    if (schemaValidateInputError.vendor && schemaValidateInputError.vendor.errors &&
      schemaValidateInputError.vendor.errors.length > 0) {
      salida.errors = schemaValidateInputError.vendor.errors;
    } else if (schemaValidateInputError.vendor && schemaValidateInputError.vendor.code) {
      salida.errors.push({
        code: schemaValidateInputError.vendor.code,
        message: schemaValidateInputError.vendor.message,
        label: ""
      });
    } 
    res.status(salida.status);
    return res.json(salida);
  }

  User.authenticate({
    email: req.body.email
  }, function(err, data) {
    if (err) {
      switch (err.code) {
        case userError.U0001.code:
          salida = {
            status: 404,
            statusCode: "error",
            message: err.message,
            code: err.code,
            errors: []
          };
          break;
        case userError.U0004.code: case userError.U0005:
          salida = {
            status: 403,
            statusCode: "error",
            message: err.message,
            code: err.code,
            errors: []
          };
          break;
        default:
          salida = {
            status: 500,
            statusCode: "error",
            message: err.message,
            code: err.code,
            errors: []
          };
          break;
      }
      if (err.vendor && err.vendor.code) {
        salida.errors.push({
          code: err.vendor.code,
          message: err.vendor.message,
          label: ""
        });
      }
      res.status(salida.status);
      return res.json(salida);
    }

    if (data) {
      if (!bcrypt.compareSync(req.body.password, data.password)) {
        salida = {
          status: 404,
          statusCode: "error",
          message: "Clave Errada",
          code: "Clave Errada",
          errors: []
        };
        res.status(salida.status);
        return res.json(salida);
      }
      if (req.session && req.session.token && req.session.user === data.userid) {
        token = req.session.token;
      } else {
        token = jwt.sign(
          {
            email: data.email
          },
          process.env.JWT_SECRET,
          {
            algorithm: 'HS256',
            expiresIn: '365 days',
            issuer: 'mDigital',
            audience: data.email,
            jwtid: data.email
          }
        );
        try {
          req.session.email = data.email; 
          req.session.user = data.userid;
          req.session.organization = data.org_id; 
          req.session.token = token;
          req.session.save();
        } catch (ex) {
          console.log('error en sesion', ex);

          salida = {
            status: 500,
            statusCode: "fail",
            message: sessionError.S9999.message,
            code: sessionError.S9999.code,
            errors: []
          };
        }

        if (salida.statusCode && salida.statusCode >= 400) {
          res.status(salida.status);
          return res.json(salida);
        }
      }
      salida = {
        status: 200,
        statusCode: "success",
        message: "",
        user: data.userid,
        organization : {
          id: data.org_id,
          name: data.org_name,
          description: data.org_description,
          domain: data.org_domain,
          photo_url: data.org_photo_url,
        },        
        token: token
      };

      res.setHeader("x-token", salida.token);
      res.status(salida.status);
      res.json(salida);
    }
  });
};

