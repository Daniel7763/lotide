//require
const {findKey} = require("../index");

//chai require
const assert = require("chai").assert;

//TEST
// findKey(planetSuns, "noma"));
// findKey(planetSuns, "Ora"));

//chai test
describe("#findKeyTest", () => {
  it("passes if value is 2", () => {

    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 3 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    assert.equal(findKey(obj, callback), 'noma');
  });
});