// FUNCTION IMPLEMENTATION
const {assertEqual} = require("./assertEqual")

const tail = function(array) {
  return array.slice(1);
};

//export
module.exports = tail;