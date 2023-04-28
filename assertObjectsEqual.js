const eqArrays = function () {
  if (arguments[0].length !== arguments[1].length) {
    return false;
  }
  for (let i = 0; i < arguments[0].length; i++) {
    if (arguments[0][i] !== arguments[1][i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let object2Keys = Object.keys(object2);
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (
      object2Keys.includes(key) === false ||
      object1[key] !== object2[key]
    ) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  const equalObj = eqObjects(actual, expected);
  return equalObj === true
    ? `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑 Assertion Failled: ${inspect(actual)} !== ${inspect(expected)}`;
};

console.log(assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }));
