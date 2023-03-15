//require
const {tail} = require('../index');

//chai require
const assert = require('chai').assert;

//Tail chai test code
describe("#tail", () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});