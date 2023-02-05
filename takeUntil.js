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

//takeUntil FUNCTION
const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
};


const data1 = ([1, 2, 5, 7, 2, -1, 2, 4, 5]);

const results1 = takeUntil(data1, (x) => x === 4);

console.log(results1, [1, 2, 5, 7, 2, -1, 2,]);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2,]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, x => x === 'Hollywood');

console.log(results2, ["I've", "been", "to",]);
console.log(assertArraysEqual(results2, ["I've", "been", "to",]));