// const assertArraysEqual = require("./assertArraysEqual");

const without = function (array, values) {
  for (let index = 0; index < values.length; index++) {
    array = array.filter((item) => item !== values[index]);
  }
  return array;
};

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
