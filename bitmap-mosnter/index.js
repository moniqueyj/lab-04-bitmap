'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitobject = require('./lib/parser');
const transform = require('./lib/transform');
// const fs = require('fs');


// bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
//   var newobject = new bitobject.Buffobject(data);
//   console.log(newobject);
//   newobject.colorPallet.fill(1000);
//   fs.writeFile('./new-bitmap.bmp', data);
// });



bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  if (err) throw err;
  var newobject = new bitobject.Buffobject(data);
  console.log(newobject);
  transform.changeColor(newobject);
  var newobjectBuffer = newobject.toBuffer();
  bitmapreader.newbitmapfile(newobjectBuffer, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
