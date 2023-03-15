// assertArraysEqual FUNCTION
const {assertArraysEqual} = require("./assertArraysEqual");

// eqArrays FUNCTION
const {eqArrays} = require("./eqArrays");


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

// console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;
