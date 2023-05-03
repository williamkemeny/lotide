const eqArrays = require("./eqArrays");

const assertArraysEqual = (a, b) =>
  console.log(
    `We can say that the inputs ${a} and ${b} being equal is ${eqArrays(a, b)}.`
  );

//   test code
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;
