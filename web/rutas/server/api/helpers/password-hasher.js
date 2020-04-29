var bcrypt = require('bcryptjs');

module.exports = function(pass) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
};
