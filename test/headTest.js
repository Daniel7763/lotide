//imported head
const head = require('../head');
const assertEqual = require('../assertEqual');

//head TEST CODE
assertEqual(head([5,6,7]), 5);

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//Export
module.exports = head;