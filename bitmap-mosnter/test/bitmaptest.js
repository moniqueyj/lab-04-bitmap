'use strict';

const readwrite = require('../lib/readbitmap');
const parse = require('../lib/parser');
const expect = require('chai').expect;

describe('testing the reading and writing functions', function() {
  describe('testing output of readbitmap.js and newbitmapfile.js', function() {
    it('should return a buffer of hex', function(done) {
      readwrite.bitmapHeader('bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex', 0, 14)).to.equal('424d462b00000000000036040000');
        done();
      });
    });

  });
});

describe('testing the parser', function() {
  describe('testing whether parser is constructing correct info', function() {
    it('should return two parts of the file header', function(done) {
      readwrite.bitmapHeader('bitmap1.bmp', function(err, data) {
        var testobject = new parse.Buffobject(data);
        expect(Buffer.isBuffer(testobject.originalBuffer)).to.eql(true);
        expect(testobject.bheader).to.equal('BM');
        expect(testobject.size).to.equal(11078);
        expect(testobject.reserved).to.equal(0);
        expect(testobject.moreReserved).to.equal(0);
        expect(testobject.pixEnd).to.equal(11078);
        expect(testobject.colors).to.equal(256);
        expect(testobject.importantcolors).to.equal(256);
        expect(testobject.width).to.equal(100);
        expect(testobject.height).to.equal(100);
        expect(testobject.colorplains).to.equal(1);
        expect(testobject.bitsperpixel).to.equal(8);
        expect(testobject.compressionobject).to.equal(0);
        expect(testobject.horizontalrez).to.equal(2834);
        expect(testobject.vertrez).to.equal(2834);
        done();
      });
    });
  });
});
