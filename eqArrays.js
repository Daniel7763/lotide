// eqArrays FUNCTION
const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
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
