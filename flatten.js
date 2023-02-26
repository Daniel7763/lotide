// assertArraysEqual FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

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

module.exports = flatten;
