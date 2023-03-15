//require
const {assertEqual} = require("../index");

//chai require
const assert = require("chai").assert;


//chai test
describe("#assertEqual", () => {
  
  it("compares two strings and returns true if both values are ===", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
});