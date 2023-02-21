//require
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const findKey = require("./findKey");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const assertEqual = require("./assertEqual");



//exports
module.exports = {
  head,
  tail,
  middle,
  findKey,
  assertArraysEqual,
  eqArrays,
  eqObjects,
  assertEqual,
};