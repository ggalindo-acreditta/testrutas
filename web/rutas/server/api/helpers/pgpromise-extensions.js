'use strict';

const pgp = require('../db').pgp;

const Inserts = function(template, data) {
  if (!(this instanceof Inserts)) {
    return new Inserts(template, data);
  }
  this.rawType = true;
  this.toPostgres = () => data.map(d => '(' + pgp.as.format(template, d) + ')').join();
};

module.exports = {
  Inserts: Inserts,
};
