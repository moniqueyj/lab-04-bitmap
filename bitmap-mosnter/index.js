'use strict';

const bitmapreader = require('./lib/readbitmap');

bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  console.log(data);
});
