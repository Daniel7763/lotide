//require
const {tail} = require('../index');
//const assertEqual = require('../assertEqual');

//chai require
const assert = require('chai').assert;

// TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);

//Tail chai test code
describe("#tail", () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});