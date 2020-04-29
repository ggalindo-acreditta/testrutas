'use strict';

const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

// Helper for linking to external query files;
function sql(file) {
  const qPath = path.join(__dirname, '/../sql/', file);

  const options = {
    minify: true,
    params: {
      schema: 'public' // 'public' is the default schema
    }
  };

  return new QueryFile(qPath, options);
}

module.exports = {
  user: {
    authenticate: sql('user/authenticate.sql'),
    register: sql('user/register.sql'),
    confirm: sql('user/confirm.sql'),
    connect: sql('user/connect.sql'),
    disconnect: sql('user/disconnect.sql'),
    invite: sql('user/invite.sql'),
    confirmInvite: sql('user/confirm-invite.sql'),
    get: sql('user/get.sql'),
    getInvite: sql('user/get-invite.sql')
  },
  combo: {
    getDifficulty: sql('combo/select-difficulty.sql'),
    getMateriality: sql('combo/select-materiality.sql')
  },
  element: {
    list: sql('element/list.sql'),
    get: sql('element/get.sql'),
    post: sql('element/post.sql'),
    put: sql('element/put.sql'),
    delete: sql('element/delete.sql'),
    updateImageUrl: sql('element/update-image.sql'),
    clearImageUrl: sql('element/clear-image.sql')
  },
  path: {
    list: sql('path/list.sql'),
    get: sql('path/get.sql'),
    post: sql('path/post.sql'),
    put: sql('path/put.sql'),
    delete: sql('path/delete.sql'),
    updateImageUrl: sql('path/update-image.sql'),
    clearImageUrl: sql('path/clear-image.sql'),
    tree: sql('path/list-tree.sql')
  },
  mensajes: {
    crear: sql('mensajes/crear.sql'),
    getUsuarioEmailById: sql('mensajes/select-user-email-by-id.sql'),
    getUsuarioIdByEmail: sql('mensajes/select-user-id-by-email.sql'),
    registrarCarrier: sql('mensajes/registrar-carrier.sql'),
    desactivarCarriers: sql('mensajes/desactivar-carriers-por-tipo.sql'),
    desactivarCarrier: sql('mensajes/desactivar-carrier.sql'),
    getNextCarrier: sql('mensajes/select-next-carrier.sql'),
    getCarrier: sql('mensajes/select-carrier.sql'),
    purgarCola: sql('mensajes/purgar-cola.sql'),
    meterColaPorTipo: sql('mensajes/meter-en-cola-por-tipo.sql'),
    getNextMensaje: sql('mensajes/select-proximo-mensaje-en-cola.sql'),
    setIntentoFallido: sql('mensajes/set-intento-fallido.sql'),
    setIntentoExitoso: sql('mensajes/set-intento-exitoso.sql')
  }
};
