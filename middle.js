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

const middle = function (array) {
  let middle = 0;

  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    middle = Math.floor(array.length / 2);
    return array.slice(middle, middle + 2);
  } else {
    middle = Math.floor(array.length / 2);
    return array.slice(middle, middle + 1);
  }
};

console.log(middle([1, 2])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
