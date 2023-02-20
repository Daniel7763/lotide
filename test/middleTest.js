//const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//if array length is 1 or 2 return empty array
//if array length is odd return middle
//if array length is even length divide it by 2 and return math.floor & math

//middle TEST
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6]); // => [5, 6]
assertArraysEqual(middle([1, 2, 3, 4,]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, ]), []); // => []

module.exports = middle;
