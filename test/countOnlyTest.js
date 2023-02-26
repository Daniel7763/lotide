//require
const {countOnly} = require("../index");

// //chai require
// const assert = require('chai').assert;

// //test code
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});
// // note, our assertEqual function can only compare primitive values! Not objects, so we've broke down our tests

// countOnly(result1["Jason"], 1);
// countOnly(result1["Karima"], undefined);
// countOnly(result1["Fang"], 2);

// //chai test
// describe("#head", () => {

//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(countOnly([1, 2, 3]), 1);
//   });

// });