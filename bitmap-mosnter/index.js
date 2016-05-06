'use strict';

const bitmapreader = require('./lib/readbitmap');
const bitobject = require('./lib/parser');


//read bitmapfile
bitmapreader.bitmapHeader('bitmap1.bmp', (err, data) => {
  var newobject = new bitobject.Buffobject(data);
  console.log(newobject);

});

//write new bitmapfile
/*bitmapreader.newbitmapfile(brandnewbuffer, (err, data) => {
  console.log(data);
});*/
