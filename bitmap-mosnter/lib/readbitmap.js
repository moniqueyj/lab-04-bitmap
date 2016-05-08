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

exports.newbitmapfile = function(buffer, callback) {
  fs.writeFile(__dirname + 'new-bitmap.bmp', buffer, (err) => {
    if (err) {
      console.err;
      callback(err, null);
      return;
    }
    callback(null, 'new-bitmap.bmp');
  });
};
