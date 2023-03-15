//require
const {countLetters} = require("../index");

//chai require
const assert = require("chai").assert;


//chai test
describe("#countLetters", () => {

  it("tallys the letters in a string and pushes object", () => {
    assert.deepEqual(countLetters("lilly fix"), { l: 3, i: 2, y: 1, f: 1, x: 1 });
  });
});