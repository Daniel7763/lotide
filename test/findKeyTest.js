//require
const {findKey} = require("../index");

//chai require
const assert = require("chai").assert;

//TEST
// findKey(planetSuns, "noma"));
// findKey(planetSuns, "Ora"));

//chai test
const planetSuns = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
});
//, x => x.stars === 2); // => "noma"

describe("#findKey", () => {
  
  it("returns the input key name in an object", () =>{
    assert.strictEqual(findKey(planetSuns, "2"), "noma");
  });
});