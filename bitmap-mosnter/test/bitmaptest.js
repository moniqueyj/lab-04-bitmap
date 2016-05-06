'use strict';

const reader = require('../lib/readbitmap');
const expect = require('chai').expect;

describe('testing the reading function', function() {
  describe('testing output of readbitmap.js', function() {
    it('should return a buffer of hex', function(done) {
      reader.bitmapHeader('bitmap1.bmp', function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex', 0, 14)).to.equal('424d462b00000000000036040000');
        done();
      });
    });

    it('should');
  });
});
const expect = require('chai').expect;

describe('testing ')
