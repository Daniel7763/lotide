//require
const eqArrays = require("./eqArrays");

// assertArraysEqual FUNCTION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {

    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

//export
module.exports = assertArraysEqual;
