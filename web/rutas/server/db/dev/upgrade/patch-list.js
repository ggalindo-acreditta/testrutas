'use strict';

/**
 * Lista los scripts que deben aplicarse.
 * Cada nuevo script debe agregarse al final de la lista en el arreglo "patches".
 * Cada entrada debe tener el siguiente formato.
 * {
 *   patch: 'nombre-archivo-sql',
 *   dependencies: ['nombre-archivo-sql', ...],
 *   dependenciesSoft: ['nombre-archivo-sql', ...],
 *   dependents: ['nombre-archivo-sql', ...]
 * }
 * donde,
 * - patch: Nombre del archivo script sql que va a aplicarse.
 * - dependencies: OPCIONAL. Arreglo de archivos scripts sql. Utilizado para validaciones.
 *     El parche "patch" se aplicará si y solo si los parches aca listados han sido aplicados.
 *     Si alguno de los parches no ha sido aplicado entonces se detiene el proceso.
 * - dependenciesSoft: OPCIONAL. Arreglo de archivos scripts sql. Utilizado para validaciones.
 *     El parche "patch" se aplicará si y solo si los parches aca listados han sido aplicados.
 *     Si alguno de los parches no ha sido aplicado entonces NO se detiene el proceso y continua con el siguiente parche.
 * - dependents: OPCIONAL. Arreglo de archivos scripts sql. Utilizado para validaciones.
 *     El parche "patch" NO se aplicará si alguno de los parches aca listados ha sido aplicado.
 *     Si alguno de los parches ha sido aplicado entonces NO se detiene el proceso y continua con el siguiente parche.
 *
 */

module.exports.patches =  [
  {
    patch: 'patch_b6442a25a39ef713a676c266525495e5.sql'
  },
  {
    patch: 'patch_fc20b68ea2366d92b32acca637b6a6a0.sql'
  },
  {
    patch: 'patch_0c87ae37ade82e6c5f42e7e29a4f72e0.sql'
  },
  {
    patch: 'patch_bd7de30d67730c66c001344712328ea2.sql'
  },
  {
    patch: 'patch_1d209721b43f50dafe71e080335e881e.sql'
  },
  {
    patch: 'patch_8f78592738673418877c479316799d31.sql'
  },
  {
    patch: 'patch_f7f6d785e36a222ecec1569fed29a0a8.sql'
  },
  {
    patch: 'patch_738211ff32f2a97aa1d5a4b397772607.sql'
  },
  {
    patch: 'patch_ba854da3d3343b69d16db003b6b8fc8c.sql'
  },
  {
    patch: 'patch_dd508d2a467bf8d51ad17365b98add7c.sql'
  },
  {
    patch: 'patch_97576e65ecb97e068dd837138b480f79.sql'
  },
  {
    patch: 'patch_80b3ee2abd52bb47f77afba3cd0fb4f1.sql'
  },
  {
    patch: 'patch_c589191bd994537e7c29b0e7673afd50.sql'
  },
  {
    patch: 'patch_e2228aa7fd5e0e0b8f79ce1e5cedbac2.sql'
  },
  {
    patch: 'patch_dd59c57063874f2b4684c3cc7903d8c8.sql'
  },
  {
    patch: 'patch_6bf3bdcd01b3319178a0bc5bd5d669a4.sql'
  },
  {
    patch: 'patch_672cb271a1a08df64859bd3c39ee37ca.sql'
  },
  {
    patch: 'patch_071204e9821ba5e23f272ae359c05fa4.sql'
  }
];
