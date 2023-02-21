// eqObjects FUNCTION
const eqObjects = function(object1, object2) {
//check if key.length is the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //cycle through keys in object1
  for (const key in object1) {
    //check if both objects are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // check if keys match
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //if all the rest is false then return true
  return true;
};


//assterObjectsEqual FUNCTION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};


const objectTest1 = { a: '1', b: 2 };
const objectTest2 = { a: '1', b: 2 };
const objectTest3 = { b: 2, a: '1' };
const objectTest4 = { a: '111', b: 222 };

console.log(assertObjectsEqual(objectTest1, objectTest2));
console.log(assertObjectsEqual(objectTest1, objectTest3));
