// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

// //findKeyByValue FUNCTION
// const findKeyByValue = function(obj, value) {

//   //cycle through object keys
//   for (let key in obj) {
//     //find a key with a matching
//     if (obj[key] === value) {
//     //if truthy return ket of falsey return undefined
//       return key;
//     }
//   }
//   return undefined;
// };


//findKey FUNCTION
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return "no key found";
};

const planetSuns = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(assertEqual(planetSuns, "noma"));
console.log(assertEqual(planetSuns, "Ora"));