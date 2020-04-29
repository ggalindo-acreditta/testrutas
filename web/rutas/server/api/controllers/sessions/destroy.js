'use strict';

module.exports = function(req, res) {
  const salida = {
    status: 200,
    message: 'success'
  };
  if (req.session) {
    req.session.destroy();
  }
  res.status(salida.status);
  res.json(salida);
};