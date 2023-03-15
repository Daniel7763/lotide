const assert = require('chai').assert; 
const map = require('../map');

describe("#mapTest", () => {
  it("returns all numbers that can be divided by 3", () => {
    assert.deepEqual(map([1, 2, 3], x => x * 3),[3, 6, 9]);
  });
  
});