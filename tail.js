const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function () {
  if (arguments[0].length === 0 || arguments[0].length === 1) {
    return [];
  } else {
    let tail = arguments[0].map((x) => x);
    return tail.shift();
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail([""])); // no need to capture the return value since we are not checking it
