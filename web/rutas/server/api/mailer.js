'use strict';

var cron = require('node-cron');
var config = require('./config/config');
process.env.DATABASE = process.env.DATABASE || config.database;
var Mensajes = require('./models/mensajes');
var _ = require('lodash');
var nodemailer = require('nodemailer');
var transporter = null;
var handlebars = require('handlebars');
var fs = require('fs');

var task;
var carriers = [];
var iCarrier = -1;
var replyTo = "";

// Para leer los archivos HTML
var readHTMLFile = function(path, callback) {
  fs.readFile(path, {encoding: 'utf-8'}, function(err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

// Enviar mensaje
var enviarMensaje = function() {
  // Si existe por lo menos alguna configuracion se obtiene y se comienza la tarea
  Mensajes.obtenerProximoCarrier({
    carrier: iCarrier >= 0 ? carriers[iCarrier].carrier : carriers[0].carrier,
    type: 1
  }, function(err, data) {
    var lCarrier = iCarrier; // Valor anterior del Carrier
    iCarrier = -1;
    if (err) {
      console.error("No hay Carriers disponibles. %j", err);
      task.start();
      return;
    }

    if (data) {
      for (var j = 0; j < carriers.length && iCarrier < 0; j++) {
        if (carriers[j].carrier === data.msg_carrier) {
          iCarrier = j;
        }
      }
    }

    if (iCarrier < 0) {
      console.error("No hay Carrier disponible!");
      // Comenzar la tarea
      task.start();
      return;
    }

    if (iCarrier !== lCarrier) {
      transporter = null;
    }
    if (!transporter) {
      transporter = nodemailer.createTransport(carriers[iCarrier].config);
    }

    // Obtener el proximo mensaje a enviar
    Mensajes.getNextMensaje({
      type: 1
    }, function(err, data) {
      if (err) {
        console.error(err);
      }
      if (data) {
        if (_.isEmpty(data)) {
          // Comenzar la tarea
          task.start();
          return;
        }
        readHTMLFile(`../api/templates/${data.template}.html`, function(err, html) {
          if (err) {
            console.log(err);
          }
          var template = handlebars.compile(html);
          var replacements = {
            email: data.data.email.toString(),
            code: data.data.code.toString(),
            token: data.data.token.toString(),
            url: data.data.url
          };
          var htmlToSend = template(replacements);
          transporter.sendMail({
            replyTo: replyTo,
            from: carriers[iCarrier].carrier,
            to: data.address,
            subject: data.subject,
            text: 'invitacion, codigo',
            html: htmlToSend
          }, function(err, info) {
            if (err) {
              console.error(err);
              // Marcar el intento fallido, almacenar el error
              Mensajes.setIntentoFallido({
                msg: data.msg,
                errorText: err
              }, function(err, data) {
                if (err) {
                  console.error(err);
                }
                // Enviar proximo mensaje
                enviarMensaje();
              });
            }

            if (info) {
              // Pasar el mensaje a enviados
              // eliminarlo de la cola
              // Actualizar el contador del carrier
              // Obtener proximo Carrier
              Mensajes.setIntentoExitoso({
                msg: data.msg,
                carrier: carriers[iCarrier].carrier,
                type: 1
              }, function(err, data) {
                if (err) {
                  console.error(err);
                }
                // Enviar proximo mensaje
                enviarMensaje();
              });
            }
          });
        });
      }
      if (!err && !data) {
        // Comenzar la tarea
        task.start();
        return;
      }
    });
  });
};

// Procesar la cola
var processQueue = function() {
  if (carriers.length <= 0) {
    console.error("No hay Carriers disponibles");
    // Comenzar la tarea
    task.start();
    return;
  }
  // Purgar la cola
  Mensajes.purgarCola({
    type: 1
  }, function(err, data) {
    if (err) {
      console.error(err);
    }
    if (data) {
      // Meter los mensajes en la cola
      Mensajes.meterColaPorTipo({
        type: 1,
        carrier: "correo@correo.com"
      }, function(err, data) {
        if (err) {
          console.error(err);
        }
        if (data) {
          // Enviar mensajes
          enviarMensaje();
        }
      });
    }
  });
};

var loadCarrier = function(i) {
  var emailCfg = config.message || {email: {smtp: []}};
  iCarrier = -1;

  if (i <= emailCfg.email.smtp.length) {
    // Registrar el carrier
    Mensajes.registrarCarrier({
      carrier: emailCfg.email.smtp[i - 1].carrier,
      type: 1,
      limit: emailCfg.email.smtp[i - 1].limit
    }, function(err, data) {
      if (err) {
        console.error(err);
      }
      if (data) {
        // Incluir el carrier en la lista
        carriers.push(emailCfg.email.smtp[i - 1]);

        // Proximo carrier
        loadCarrier(i + 1);
      }
    });
  } else if (carriers.length > 0) {
    processQueue();
  } else {
    // Comenzar la tarea
    task.start();
  }
};

// Cargar los carriers configurados
// Solo email.smtp
var loadCarriers = function() {
  Mensajes.desactivarCarriers({
    type: 1
  }, function(err, data) {
    if (err) {
      console.error(err);
      // Comenzar la tarea
      task.start();
    }
    if (data) {
      // Comenzar la carga de los carriers
      loadCarrier(1);
    }
  });
};

task = cron.schedule('*/1 * * * *', function() {
  task.stop();
  if (replyTo === "") {
    if (config.message) {
      if (config.message.email) {
        replyTo = config.message.email.replyTo || '';
      }
    }
  }
  if (iCarrier < 0) {
    loadCarriers();
  } else {
    processQueue();
  }
}, false);

task.start();

// Iniciar el proceso
// loadCarriers();
