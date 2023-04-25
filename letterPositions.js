const eqArrays = function() {
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

const letterPositions = function(string) {
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

assertArraysEqual(letterPositions("hello").e, [1]);
