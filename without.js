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
    } else {
      return true;
    }
  }
};

//Without Function
const without = function(arr1, arr2) {

  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr1[i]);
    }
  } return `${arr1} ${arr2} ${newArr}`;
};


// TEST CODE
assertArraysEqual(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);