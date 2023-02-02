// eqArrays FUNCTION
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertArraysEqual("Lighthouse Labs", "Bootcamp");
// assertArraysEqual(1, 1);

eqArrays([1, 2, 3], [1, 2, 3]);

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
