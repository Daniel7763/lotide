// // eqArrays FUNCTION
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

// assertArraysEqual FUNCTION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};


// // letterPositions FUNCTIION
// const letterPositions = function(sentence) {
//   const results = {};
//   // loop through sentence letter by letter
//   for (let i = 0; i <= sentence.length; i++) {
//     //filter letters from spaces
//     if (sentence[i] !== (" ")) {
//       //pushing to stringArray
//       stringArray.push(sentence[i]);
//     }
//     //loop through stringArray
//   } for(objLetters of stringArray){
//     //add stringArray[i]s to the obj results
//     if(objLetter)
//   }
//   console.log(stringArray);
// };


const letterPositions = function(sentence) {
//creat obj for everything to be pushed into
  const results = {};

//loop through the input sentence
  for (let i = 0; i < sentence.length; i++) {
//make a var for the sentence index to live
    let letter = sentence[i];
// make an IF to find if a letter is not in results
    if (!results[letter]) {
      //if truthy add a key named LETTER thats the index result
      results[letter] = [i];
      //if falsey 
    } else {
      results[letter].push(i);
    }
  }

  return results;
};
// its normal to reference the key by adding a period then key name
assertArraysEqual(letterPositions("godzilla rabbit").o, [1]);

console.log(letterPositions("godzilla rabbit"));