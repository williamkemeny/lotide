// const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  const equalObj = eqObjects(actual, expected);
  return equalObj === true
    ? `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑 Assertion Failled: ${inspect(actual)} !== ${inspect(expected)}`;
};

// console.log(assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }));

module.exports = assertObjectsEqual;
