const assert = require('chai').assert; 
const takeUntil = require('../takeUntil');


describe("#takeUntil", () => {

  it("[1, 2, 5, 7, 2] returns [1, 2]", () => {
    const callbackFunction = function(x) {
      return x === 5;
    };
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2], callbackFunction ), [1, 2,]); 
  });

});