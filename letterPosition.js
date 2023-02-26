const assertArraysEqual = require("./assertArraysEqual");


//letPosition FUNCTION
const letterPosition = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];

    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }

  return results;
};
// its normal to reference the key by adding a period then key name
assertArraysEqual(letterPosition("godzilla rabbit").o, [1]);

console.log(letterPosition("godzilla rabbit"));

module.exports = letterPosition;