//require
const {eqArrays} = require('./index');
console.log(eqArrays);

// assertArraysEqual FUNCTION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {

    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};
console.log(assertArraysEqual([1,2], [1,2]));

//export
module.exports = assertArraysEqual;
