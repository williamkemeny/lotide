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

const assertArraysEqual = (a, b) =>
  console.log(
    `We can say that the inputs ${a} and ${b} being equal is ${eqArrays(a, b)}.`
  );

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["eggs", "bacon", "bread"];
const words2 = ["eggs", "bacon", "bread"];

const results1 = map(words, (word) => word);
const results2 = map(words1, (word) => word[0]);
const results3 = map(words2, (word) => word + "?");

assertArraysEqual(words, results1);