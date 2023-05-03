// const assertArraysEqual = require("./assertArraysEqual");

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// const words = ["ground", "control", "to", "major", "tom"];
// const words1 = ["eggs", "bacon", "bread"];
// const words2 = ["eggs", "bacon", "bread"];

// const results1 = map(words, (word) => word);
// const results2 = map(words1, (word) => word[0]);
// const results3 = map(words2, (word) => word + "?");

// assertArraysEqual(words, results1);

module.exports = map;
