const assertArraysEqual = require("./assertArraysEqual");


//map FUNCTION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// //map test
// const words = ["ground", "control", "to", "major", "tom"];


// const results1 = map(words, word => word[0]);

// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
// //console.log(results1)

module.exports = map;
