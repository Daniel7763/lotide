//require
const assertEqual = require('../assertEqual');

//chai require
const assert = require("chai").assert;


//chai test
describe("#assertEqual", () => {
  
  it("compares two strings and returns true if ===", () =>{
    assert.strictEqual(assertEqual(1, 1), true);
  });
});