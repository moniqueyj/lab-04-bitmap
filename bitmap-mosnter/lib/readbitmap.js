'use strict';
const fs = require('fs');

exports.bitmapHeader = function(image, callback) {
  fs.readFile(image, (err, data) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};


//create a write module
