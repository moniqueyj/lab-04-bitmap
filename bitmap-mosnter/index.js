'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitoobject = require('./lib/parser');

//read bitmapfile
bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  var newobject = new bitoobject.Buffobject(data);
  console.log(newobject);
});

//write new bitmapfile
bitmapreader.newbitmapfile(buffer, (err, data) => {

});
