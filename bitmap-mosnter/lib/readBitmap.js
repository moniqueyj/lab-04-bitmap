'use strict';

const fs = require('fs');
exports.readBitMap = function(){
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err,data){
    if(err) throw err;
    console.log(data);
  });
};

exports.writeFile = function(buffer){
  fs.writeFile(__dirname + '/../img/changed.bmp',buffer,function(err){
    if(err) throw err;
    console.log('create file named changed.bmp');
  });
};

//I don't know that we create file for tranformed data so for now I just named it changed.bmp
