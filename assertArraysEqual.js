const eqArrays = require("./eqArrays");

const assertArraysEqual = (a, b) => {
  let string = `We can say that the inputs ${a} and ${b} being equal is ${eqArrays(
    a,
    b
  )}.`;
  console.log(string);
  return string;
};

module.exports = assertArraysEqual;
