'use strict';
const fs = require('fs');

exports.bitmapHeader = function(image, callback) {
  fs.readFile(image, (err, data) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, data.toString('utf8', 0, 2));
  });
};
