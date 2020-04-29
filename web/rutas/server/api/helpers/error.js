'use strict';

module.exports.session = {
  S0001: {
    code: 'S0001',
    message: 'Auth token invalido, intente iniciando sesion de nuevo'
  },
  S0002: {
    code: 'S0002',
    message: 'Error en inicio de sesion'
  },
  S9999: {
    code: 'S9999',
    message: 'Error de sesion'
  }
};

module.exports.api = {
  A9999: {
    code: 'A9999',
    message: 'Error desconocido'
  },
  A0001: {
    code: 'A0001',
    message: 'Demasiadas solicitudes en este periodo de tiempo'
  },
  A0002: {
    code: 'A0002',
    message: 'Client Key invalido'
  }
};

module.exports.app = {
  APP99: {
    code: 'APP99',
    message: 'Error desconocido'
  }
};

module.exports.filtersort = {
  FS001: {
    code: 'FS001',
    message: 'No se ha indicado el query del objeto request'
  },
  FS002: {
    code: 'FS002',
    message: 'No se ha indicado el esquema para validar'
  },
  FS003: {
    code: 'FS003',
    message: 'Tipo de dato Date/Datetime no esta debidamente formateado'
  },
  FS004: {
    code: 'FS004',
    message: 'Tipo de dato Date/Datetime no es valido'
  },
  FS005: {
    code: 'FS005',
    message: 'Tipo de dato String no esta debidamente formateado'
  },
  FS006: {
    code: 'FS006',
    message: 'Tipo de dato String no es valido'
  },
  FS007: {
    code: 'FS007',
    message: 'Tipo de dato Number no esta debidamente formateado'
  },
  FS008: {
    code: 'FS008',
    message: 'Tipo de dato Number no es valido'
  },
  FS009: {
    code: 'FS009',
    message: 'Tipo de dato Integer no esta debidamente formateado'
  },
  FS010: {
    code: 'FS010',
    message: 'Tipo de dato Integer no es valido'
  },
  FS011: {
    code: 'FS011',
    message: 'Tipo de dato Boolean no es valido'
  },
  FS012: {
    code: 'FS012',
    message: 'Tipo de dato Boolean no es valido'
  },
  FS013: {
    code: 'FS013',
    message: 'Tipo de dato UUID no es valido'
  },
  FS014: {
    code: 'FS014',
    message: 'Tipo de dato UUID no es valido'
  },
  FS015: {
    code: 'FS015',
    message: 'Tipo de dato no soportado'
  },
  FS016: {
    code: 'FS016',
    message: 'Operador no soportado'
  },
  FS017: {
    code: 'FS017',
    message: 'Operador no valido para el tipo de dato'
  },
  FS999: {
    code: 'FS999',
    message: 'Error desconocido'
  }
};

module.exports.apiModel = {
  AM999: {
    code: 'AM999',
    message: 'Error desconocido en el Modelo'
  },
  AM001: {
    code: 'AM001',
    message: 'Campo obligatorio no proporcionado'
  },
  AM002: {
    code: 'AM002',
    message: 'Tipo de dato Datetime no es valido'
  },
  AM003: {
    code: 'AM003',
    message: 'Tipo de dato String no no es valido'
  },
  AM004: {
    code: 'AM004',
    message: 'Tipo de dato Number no es valido'
  },
  AM005: {
    code: 'AM005',
    message: 'Tipo de dato Integer no es valido'
  },
  AM006: {
    code: 'AM006',
    message: 'Tipo de dato Boolean no es valido'
  },
  AM007: {
    code: 'AM007',
    message: 'Tipo de dato UUID no es valido'
  },
  AM008: {
    code: 'AM008',
    message: 'Tipo de dato no soportado'
  },
  AM009: {
    code: 'AM009',
    message: 'Error general de validacion'
  },
  AM010: {
    code: 'AM010',
    message: 'Se espera un objeto vacio'
  },
  AM011: {
    code: 'AM011',
    message: 'Formato de Email no valido'
  },
  AM012: {
    code: 'AM012',
    message: 'Tipo de dato Time no es valido'
  },
  AM013: {
    code: 'AM013',
    message: 'Tipo de dato Date no es valido'
  },
  AM014: {
    code: 'AM014',
    message: 'Tipo de dato Url no es valido'
  },
  AM015: {
    code: 'AM015',
    message: 'Tipo de dato Uri no es valido'
  },
  AM016: {
    code: 'AM016',
    message: 'Tipo de dato Array no es valido'
  },
  AM017: {
    code: 'AM017',
    message: 'Tipo de dato Object no es valido'
  }
};

module.exports.usuario = {
  U0001: {
    code: 'U0001',
    message: 'Usuario no encontrado'
  },
  U0002: {
    code: 'U0002',
    message: 'El usuario no tiene acceso al recurso'
  },
  U0003: {
    code: 'U0003',
    message: 'El usuario no esta autenticado'
  },
  U0004: {
    code: 'U0004',
    message: 'El usuario solo completo el registro basico'
  },
  U0005: {
    code: 'U0005',
    message: 'El usuario no esta activo'
  },
  U0006: {
    code: 'U0006',
    message: 'El password actual no coincide'
  },
  U0007: {
    code: 'U0007',
    message: 'El nuevo password y la cofirmacion no coinciden'
  },
  U0008: {
    code: 'U0008',
    message: 'Ya existe un usuario registrado con el nombre de usuario (login)'
  },
  U0009: {
    code: 'U0009',
    message: 'Ya existe un usuario registrado con ese numero de documento de identidad'
  },
  U0010: {
    code: 'U0010',
    message: 'Ya existe un usuario registrado con ese correo'
  },
  U0011: {
    code: 'U0011',
    message: 'Acceso no permitido'
  },
  U0012: {
    code: 'U0012',
    message: 'El usuario ya fue confirmado y activado'
  },
  U0013: {
    code: 'U0013',
    message: 'Conexion no valida, Su Organizacion ya se encuentra registrada'
  },
  U9999: {
    code: 'U9999',
    message: 'Error desconocido'
  }
};

module.exports.mensaje = {
  M0001: {
    code: "M0001",
    message: "No se ha indicado una direccion de correo"
  },
  M0002: {
    code: "M0002",
    message: "No se ha indicado un numero de telefono"
  },
  M9999: {
    code: "M9999",
    message: "Error desconocido"
  }
};

module.exports.element = {
  E0001: {
    code: "E0001",
    message: "Usuario no encontrado o usuario invalido"
  },
  E0002: {
    code: "E0002",
    message: "El usuario no esta conectado a ninguna Organizacion"
  },
  E0003: {
    code: "E0003",
    message: "Elemento no encontrado"
  },
  E0004: {
    code: "E0004",
    message: "El archivo de Imagen debe ser de tipo image/png"
  },
  E0005: {
    code: "E0005",
    message: "El tamaño del archivo excede lo permitido (2Mb)"
  },
  E0006: {
    code: "E0006",
    message: "La imagen no pudo ser guardada"
  },
  E0007: {
    code: "E0007",
    message: "El elemento seleccionado esta asociado a una Ruta"
  },
  E0008: {
    code: "E0008",
    message: "Ya existe un elemento con el nombre ingresado"
  },
  E0009: {
    code: "E0009",
    message: "Los elementos solo pueden ser creados por el Lider de la Organizacion"
  },
  E0010: {
    code: "E0010",
    message: "Los elementos solo pueden ser actualizados por el Lider de la Organizacion"
  },
  E0011: {
    code: "E0011",
    message: "Los elementos solo pueden ser eliminados por el Lider de la Organizacion"
  },
  E0012: {
    code: "E0012",
    message: "La proporcion de la imagen debe ser cuadrada (1:1)"
  },
  E0013: {
    code: "E0013",
    message: "La imagen de tener un ancho minimo de 600px"
  },
  E0014: {
    code: "E0014",
    message: "La imagen de tener un alto minimo de 600px"
  },
  E9999: {
    code: "E9999",
    message: "Error desconocido"
  }
};

module.exports.path = {
  PT001: {
    code: "PT001",
    message: "Usuario no encontrado"
  },
  PT002: {
    code: "PT002",
    message: "El usuario no esta conectado a ninguna Organizacion"
  },
  PT003: {
    code: "PT003",
    message: "Elemento no encontrado"
  },
  PT004: {
    code: "PT004",
    message: "El archivo de Imagen debe ser de tipo image/png"
  },
  PT005: {
    code: "PT005",
    message: "El tamaño del archivo excede lo permitido (2Mb)"
  },
  PT006: {
    code: "PT006",
    message: "La imagen no pudo ser guardada"
  },
  PT007: {
    code: "PT007",
    message: "Se indico mas de un elemento Principal"
  },
  PT008: {
    code: "PT008",
    message: "No se indico la Ruta"
  },
  PT009: {
    code: "PT009",
    message: "No se indico el Elemento Principal"
  },
  PT010: {
    code: "PT010",
    message: "Ruta no Encontrada"
  },
  PT011: {
    code: "PT011",
    message: "La proporcion de la imagen debe ser cuadrada (1:1)"
  },
  PT012: {
    code: "PT012",
    message: "La imagen de tener un ancho minimo de 600px"
  },
  PT013: {
    code: "PT013",
    message: "La imagen de tener un alto minimo de 600px"
  },
  PT999: {
    code: "PT999",
    message: "Error desconocido"
  }
};

module.exports.registro = {
  AC001: {
    code: "AC001",
    message: "Usuario ya existe (email)"
  },
  AC002: {
    code: "AC002",
    message: "Solicitud de registro ya existe (email)"
  },
  AC005: {
    code: "AC005",
    message: "Error registrando el token"
  },
  AC006: {
    code: "AC006",
    message: "Error registrando el token"
  },
  AC008: {
    code: "AC008",
    message: "Usuario ya existe pero esta inactivo (email)"
  },
  AC010: {
    code: "AC010",
    message: "Email no encontrado en las solicitudes"
  },
  AC011: {
    code: "AC011",
    message: "Token invalido"
  },
  AC012: {
    code: "AC012",
    message: "Codigo invalido"
  },
  AC013: {
    code: "AC013",
    message: 'Registro basico no finalizado'
  },
  AC014: {
    code: "AC014",
    message: 'Usuario no Registrado'
  },
  AC015: {
    code: "AC015",
    message: 'El usuario no esta conectado a ninguna Organizacion'
  },
  AC016: {
    code: "AC016",
    message: 'El Dominio del correo no pertenece al mismo dominio del Lider'
  },
  AC017: {
    code: "AC017",
    message: 'Solo los Lideres de la Organizacion pueden realizar invitaciones'
  },
  AC999: {
    code: "AC999",
    message: "Error desconocido"
  }
};

module.exports.list = {
  L9999: {
    code: 'L9999',
    message: 'Error desconocido'
  }
};