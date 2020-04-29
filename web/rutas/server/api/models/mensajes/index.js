module.exports = {
  crear: require('./crear'),
  registrarCarrier: require('./registrar-carrier'),
  desactivarCarrier: require('./desactivar-carrier'),
  desactivarCarriers: require('./desactivar-carriers'),
  obtenerProximoCarrier: require('./obtener-proximo-carrier'),
  getCarrier: require('./get-carrier'),
  purgarCola: require('./purgar-cola'),
  meterColaPorTipo: require('./meter-en-cola-por-tipo'),
  getNextMensaje: require('./get-next-mensaje'),
  setIntentoFallido: require('./set-intento-fallido'),
  setIntentoExitoso: require('./set-intento-exitoso')
};
