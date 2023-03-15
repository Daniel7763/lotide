//require
const {eqObjects} = require("../index");

//require chai
const assert = require("chai").assert;


//eqObjects chai test
describe('#eqObjects', () => {

  it('return true if both objects are equal', () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { color: "red", size: "medium" }), true);
  });
});
