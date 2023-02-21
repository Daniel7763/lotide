//require
const {assertArraysEqual} = require("../index");

//require chai
const assert = require('chai').assert;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => true

//assertArraysEqual test chai
describe("#assertArraysEqual", () => {

  it("returns a console.log of true if object === object", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
});
