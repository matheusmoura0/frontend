
const frisby = require('frisby');

exports.setup = function() {
    frisby.globalSetup({
      request: {
        timeout: 60000
      }
    });
  };