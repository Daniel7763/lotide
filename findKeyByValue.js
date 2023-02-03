// // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

//object
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  horror_drama: "Last of us"
};

//findKeyByValue FUNCTION
const findKeyByValue = function(obj, value) {

  //cycle through object keys
  for (let key in obj) {
    //find a key with a matching
    if (obj[key] === value) {
    //if truthy return ket of falsey return undefined
      return key;
    }
  }
  return undefined;
};



console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Last of us"), "drama_horror"));
