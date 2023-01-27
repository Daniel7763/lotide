// FUNCTION IMPLEMENTATION
//const assertEqual = function(actual, expected) {
//
// if (actual === expected) {
//    console.log(`Assertion passed: ${actual} === ${expected}`);
//
//  } else {
//
//    console.log(`Assertion failed: ${actual} !== ${expected}`);
//  }
//};

const tail = function(array) {
  console.log(array.slice(1));
};


// TEST CODE
tail(["Lighthouse Labs", "Bootcamp", "yo", "cranberries"]);

tail([1, 1, 6, 7, 3, 5]);