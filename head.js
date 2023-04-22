const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function () {
  if (arguments[0] === undefined) {
    return undefined;
  } else {
    return arguments[0][0];
  }
};
