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


//Without Function
// arr1 = [1,2,3] arr2 = [1, 2];
const without = function(arr1, arr2) {

  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};


// TEST CODE
console.log(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]), [1, 2]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// //assertArraysEqual(words, ["hello", "world", "lighthouse"]);