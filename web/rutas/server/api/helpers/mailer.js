'use strict';

var Msg = require('../models/mensajes');

var sendTextEmail = function(prioridad, usuario, address, subject, template, data) {
  /* eslint-disable no-negated-condition */
  Msg.crear({
    type: 1,
    priority: prioridad,
    user: !usuario ? null : usuario,
    address: address,
    subject: subject,
    template: template,
    data: data
  }, function(err, data) {
    if (err) {
      console.log('error', err);
    }
  });
  /* eslint-disable no-negated-condition */
};

var sendTextEmailToAddress = function(prioridad, address, subject, template, data) {
  sendTextEmail(prioridad, '', address, subject, template, data);
};

var sendTextEmailToUser = function(prioridad, usuario, subject, template, data) {
  sendTextEmail(prioridad, usuario, '', subject, template, data);
};

module.exports = {
  sendTextEmailToAddress: sendTextEmailToAddress,
  sendTextEmailToUser: sendTextEmailToUser
};
