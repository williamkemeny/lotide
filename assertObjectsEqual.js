const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  const equalObj = eqObjects(actual, expected);
  return equalObj === true
    ? `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑 Assertion Failled: ${inspect(actual)} !== ${inspect(expected)}`;
};

module.exports = assertObjectsEqual;
