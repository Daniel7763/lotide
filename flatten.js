// assertArraysEqual FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

// eqArrays FUNCTION
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

//flatten FUNCTION
const flatten = function(arr1) {

  let flattenArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      for (const element of arr1[i]) {
        flattenArr.push(element);
      }
    } else {
      flattenArr.push(arr1[i]);
    }
  } return flattenArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
