'use strict';

//take buffer create javascript object
module.exports.Buffobject = function(data) {
  this.bheader = data.toString('utf8', 0, 2);
  this.size = data.readIntLE(2);
  this.pixStart = data.readIntLE(10);
  this.pixEnd = data.length;
  this.colors = data.readIntLE(46);
  this.importantcolors = data.readIntLE(50);
  this.reserved = data.readIntLE(6);
  this.moreReserved = data.readIntLE(8);
  this.width = data.readIntLE(18);
  this.height = data.readIntLE(22);
  this.colorplains = data.readIntLE(26);
  this.bitsperpixel = data.readIntLE(28);
  this.compressionobject = data.readIntLE(30);
  this.size = data.readIntLE(34);
  this.horizontalrez = data.readIntLE(38);
  this.vertrez = data.readIntLE(42);
};
//make a method to turn object into buffer
Buffobject.prototype.buffobjectToBuffer = function () {

};
