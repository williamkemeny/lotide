// const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (string) {
  let letterPositionObj = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      // nothing
    } else if (letterPositionObj[string[i]] === undefined) {
      letterPositionObj[string[i]] = [i];
    } else {
      letterPositionObj[string[i]].push(i);
    }
  }

  return letterPositionObj;
};

// assertArraysEqual(letterPositions("hello").e, [1]); checking if e has 1

module.exports = letterPositions;
