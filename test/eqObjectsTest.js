//require
//const {assertEqual} = require("../index");
const {eqObjects} = require("../index");

//require chai
const assert = require("chai").assert;

//test code
// assertEqual(eqObjects({ color: "red", size: "medium" } , { size: "medium", color: "red" }), true); // => true

//eqObjects chai test
describe('#eqObjects', () => {

  it('return true if both objects are equal', () => {
    assert.strictEqual(eqObjects({color: "red", size: "medium"}), {color: "red", size: "medium"});
  });
});
