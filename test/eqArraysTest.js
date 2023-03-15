//require
const {eqArrays} = require("../index");

//require chai
const assert = require("chai").assert;

//chai test code
describe("#eqArrays", () => {

  it("returns a true if both arrays are ===", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
