var scopeEnum = [
  'gulp',
  'make',
  'npm',
  'travis',
  'circle',
  'browserstack',
  'saucelabs',
  'changelog',
  'release',
  'config',
  'model',
  'controller',
  'helper',
  'middleware',
  'session',
  'db',
  'admin',
  'account',
  'term',
  'image',
  'test',
  'usuario'
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "header-max-length": [2, "always", 100],
    'scope-enum': [2, 'always', scopeEnum],
    'footer-leading-blank': [0, 'always'] // Deshabilitado por falsos positivos
  }
};
