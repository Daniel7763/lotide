// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

//exports
module.exports = assertEqual;