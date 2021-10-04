const DataObjectAccess = require('../../shared/dataAccessObject');
const Pointer = require('../models/pointerSchema');
const http = require('http');

exports.requestLoop = setInterval(() => {
  http.get('http:192.168.0.20:5000', (response) => {
    let str = '';
    response.on('data', (chunk) => {
      str += chunk;
    });

    response.on('end', () => {
      console.log(JSON.parse(str));
      DataObjectAccess.add({ body: JSON.parse(str) }, Pointer);
    });
  });
}, 60_000);
