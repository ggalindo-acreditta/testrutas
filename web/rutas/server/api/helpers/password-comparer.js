var bcrypt = require('bcryptjs');

module.exports = function(pass1, pass2) {
  return bcrypt.compareSync(pass1, pass2);
};
