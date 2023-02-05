/// assertArraysEqual FUNCTION
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion failed: ${actual} !== ${expected}`);
//   }
// };

// // eqArrays FUNCTION
// const eqArrays = function(array1, array2) {

//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };


// const countLetters = function(input) {
//   let obj = {};
//   noSpaceString = "";
  
//   for (letters of input) {
//     if (input !== ' ') {
//       noSpaceString += letters;
//     }
//   } for (letters of noSpaceString) {
//     if (obj[letters]) {
//       obj[letters] += 1;

//     } else {
//       obj[letters] = 1;
//     }
//   }
//   return obj;
// };


//Version 2
const countLetters = function(input) {
  let obj = {};
  noSpaceString = "";
  
  for (letters of input) {
    if (letters !== ' ') {
      noSpaceString += letters;
    }
  } for (letters of noSpaceString) {
    if (obj[letters]) {
      obj[letters] += 1;

    } else {
      obj[letters] = 1;
    }
  }
  return obj;
};

//create empty object
//make FOR to cycle through string characters
//make exception for spaces
//push every letter to the object
//return new object



console.log(countLetters("lighthouse in the house"));