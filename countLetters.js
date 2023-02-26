//Version 2
const countLetters = function(input) {
  let obj = {};
  let noSpaceString = "";
  
  for (let letters of input) {
    if (letters !== ' ') {
      noSpaceString += letters;
    }
  } for (let letters of noSpaceString) {
    if (obj[letters]) {
      obj[letters] += 1;

    } else {
      obj[letters] = 1;
    }
  }
  return obj;
};


console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;