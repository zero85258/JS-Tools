var request = require('request');

request.post(
  'http://ata.local/api/permission-apply/role/1/permission/1', { 
    json: { key: 'value' } 
  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }
);

