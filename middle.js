
//middle FUNCTION
const middle = function(array) {
//arrays length 2 or 1
  if (array.length < 3) {
    return [];

    //odd arrays
  } else if ((array.length) % 2 === 1) {
    let midArray = array.length / 2;
    return array[Math.floor(midArray)];

    //even arrays
  } else if ((array.length) % 2 === 0) {
    let midArray = array.length / 2;
    return [Math.floor(midArray), Math.ceil(midArray) + 1];
  }

};

module.exports = middle;