//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject = { size: "medium", color: "red" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false