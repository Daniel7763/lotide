// eqArrays FUNCTION
// const eqArrays = function(arr1, arr2) {

//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   } return true;
// }

// // assertArraysEqual FUNCTION
// const assertArraysEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion failed: ${actual} !== ${expected}`);
//   }
// };

//middle FUNCTION
const middle = function(array) {
//arrays length 2 or 1
  if (array.length < 3) {
    return [];

    //odd arrays
  } else if ((array.length) % 2 === 1) {
    let midArray = array.length / 2;
    return array[Math.ceil(midArray) - 1];

    //even arrays
  } else if ((array.length) % 2 === 0) {
    let midArray = array.length / 2;
    return [Math.floor(midArray), Math.ceil(midArray) + 1];
  }

  

  //if array length is 1 or 2 return empty array
  //if array lenth is odd return middle
  //with the array length divide it by 2 and return math.floor & math .ceil
  //if array length is even return both middle
  //with the array length divide it by 2 and return that array position
};


console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [5]
console.log(middle([1, 2, 3, 4,])); // => [2, 3]
console.log(middle([1, 2, 3,])); // => [2])
console.log(middle([1, 2])); // => []
console.log(middle([1, ])); // => []