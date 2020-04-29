'use strict';

const toLATIN1 = function(body) {
  for (const key of Object.keys(body)) {
    if (typeof body[key] === 'string') {
      const buf = Buffer.from(body[key]);
      body[key] = buf.toString('latin1');
    }
  }
  return body;
};

module.exports = {
  toLATIN1: toLATIN1,
};

