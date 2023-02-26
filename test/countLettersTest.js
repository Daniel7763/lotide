//require
const {countLetters} = require("../index");

//node require
const assert = require("chai").assert;


//chai test
describe("#countLetters", () => {

  it("tallys the letters in a string and pushed object", () => {
    assert.equal(countLetters(("lighthouse in the house")), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});