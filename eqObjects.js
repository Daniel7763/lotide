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
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("should not hit");
    return false;
  }
  for (const key in object1) {
    {
      if (object1[key] !== object2[key]) {
        return false;
      }
      
    }
  }
  return true;
};


const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject = { size: "medium", color: "red" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false