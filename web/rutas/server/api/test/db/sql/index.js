'use strict';

var QueryFile = require('pg-promise').QueryFile;
var path = require('path');

// Helper for linking to external query files;
function sql(file) {
  // var path = '../../../test/db/sql/' + file;
  var qPath = path.join(__dirname, '/../sql/', file);

  var options = {
    minify: true,
    params: {
      schema: 'public' // 'public' is the default schema
    }
  };

  return new QueryFile(qPath, options);
}

module.exports = {
  auth: {
    cleanAuthUser: sql('auth/clean-auth-user.sql'),
    getAuthUtilData: sql('auth/get-auth-util-data.sql'),
    generateAuthApplication: sql('auth/generate-auth-application.sql'),
    cleanAuthApplication: sql('auth/clean-auth-application.sql'),
    generateGenericUser: sql('auth/generate-auth-generic-user.sql'),
    cleanGenericUser: sql('auth/clean-auth-generic-user.sql'),
    getGenericUser: sql('auth/get-auth-generic-user.sql'),
    generateBasicRegisterGenericUser: sql('auth/generate-auth-basic-register-generic-user.sql'),
    cleanBasicRegisterGenericUser: sql('auth/clean-auth-basic-register-generic-user.sql'),
    getBasicRegisterGenericUser: sql('auth/get-auth-basic-register-generic-user.sql'),
    testAuthFinishRegisterProcess: sql('auth/test-auth-finish-register-process.sql'),
    getAuthUserRegister: sql('auth/get-auth-user-register.sql'),
    getAuthApplication: sql('auth/get-auth-application.sql')
  },
  xfmsgd: {
    generateGenericUser: sql('xfm-sgd/generate-xfm-generic-user.sql'),
    cleanGenericUser: sql('xfm-sgd/clean-xfm-generic-user.sql'),
  },
  ambulatorio: {
    generateGenericAmbulatorio: sql('ambulatorio/generate-generic-ambulatorio.sql'),
    getGenericAmbulatorio: sql('ambulatorio/get-generic-ambulatorio.sql'),
    cleanGenericAmbulatorio: sql('ambulatorio/clean-generic-ambulatorio.sql')
  },
  paciente:
  {
    generateGenericPaciente: sql('paciente/generate-generic-paciente.sql'),
    getGenericPaciente: sql('paciente/get-generic-paciente.sql'),
    getGenericPacienteAlergias: sql('paciente/get-generic-paciente-alergias.sql'),
    getGenericPacienteAntecedentes: sql('paciente/get-generic-paciente-antecedentes.sql'),
    cleanGenericPaciente: sql('paciente/clean-generic-paciente.sql')
  },
  medico:
  {
    generateGenericMedico: sql('medico/generate-generic-medico.sql'),
    getGenericMedico: sql('medico/get-generic-medico.sql'),
    cleanGenericMedico: sql('medico/clean-generic-medico.sql')
  },
  alergia:
  {
    generateGenericTipoAlergia: sql('alergia/generate-generic-tipo-alergia.sql'),
    cleanGenericTipoAlergia: sql('alergia/clean-generic-tipo-alergia.sql'),
    getGenericTipoAlergia: sql('alergia/get-generic-tipo-alergia.sql'),
    getGenericTipoAlergiaDetalle: sql('alergia/get-generic-tipo-alergia-detalle.sql')

  },
  antecedente:
  {
    generateGenericTipoAntecedente: sql('antecedente/generate-generic-tipo-antecedente.sql'),
    cleanGenericTipoAntecedente: sql('antecedente/clean-generic-tipo-antecedente.sql'),
    getGenericTipoAntecedente: sql('antecedente/get-generic-tipo-antecedente.sql'),
  },
  signo_vital:
  {
    generateGenericSignoVital: sql('signo_vital/generate-generic-signo-vital.sql'),
    cleanGenericSignoVital: sql('signo_vital/clean-generic-signo-vital.sql'),
    getGenericSignoVital: sql('signo_vital/get-generic-signo-vital.sql'),
  },
  cita:
  {
    generateGenericCitaCE: sql('cita/generate-generic-cita-ce.sql'),
    generateGenericCitaCECerrada: sql('cita/generate-generic-cita-ce-cerrada.sql'),
    generateGenericCitaIQ: sql('cita/generate-generic-cita-iq.sql'),
    getGenericCitaIQ: sql('cita/get-generic-cita-iq.sql'),
    getGenericCitaCE: sql('cita/get-generic-cita-ce.sql'),
    cleanGenericCita: sql('cita/clean-generic-cita.sql')
  },
  preadmision:
  {
    generateGenericPreAdmision: sql('pre-admision/generate-generic-pre-admision.sql'),
    generateGenericTimeLine: sql('pre-admision/generate-generic-timeline.sql'),
    getGenericPreadmision: sql('pre-admision/get-generic-pre-admision.sql'),    
    cleanGenericPreAdmision: sql('pre-admision/clean-generic-pre-admision.sql'),
    cleangenericTimeLine: sql('pre-admision/clean-generic-timeline.sql')
  },
  intervencion:
  {
    generateGenericIntervencion: sql('intervencion/generate-generic-iq.sql'),
    cleanGenericIntervencion: sql('intervencion/clean-generic-iq.sql')
  },
  app:
  {
    generateGenericApp: sql('app/generate-generic-app.sql'),
    cleanGenericApp: sql('app/clean-generic-app.sql')
  },
  test: {
    generateData: sql('generate-data.sql'),
    eliminarData: sql('delete-data.sql'),
    resetUsuarios: sql('reset-test-users.sql')
  }
};
