//require
const assertEqual = require('../assertEqual');

//chai require
const assert = require("chai").assert;

//assertEqual TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//chai test
describe("#assertEqual", () => {
  
  it("compares two strings and returns truw if ===", () =>{
    assert.strictEqual(assertEqual(1, 1), true);
  });
});