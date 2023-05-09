const eqArrays = require("./eqArrays");

const assertArraysEqual = (a, b) =>
  console.log(
    `We can say that the inputs ${a} and ${b} being equal is ${eqArrays(a, b)}.`
  );

module.exports = assertArraysEqual;
