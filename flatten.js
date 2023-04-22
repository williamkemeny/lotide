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

const flatten = function (array) {
  let newArray = [];
  for (let index1 = 0; index1 < array.length; index1++) {
    if (Array.isArray(array[index1])) {
      for (let index2 = 0; index2 < array[index1].length; index2++) {
        newArray.push(array[index1][index2]);
      }
    } else {
      newArray.push(array[index1]);
    }
  }
  return newArray;
};

let test = [1, 2, [3, 4], 5, [6]];
console.log(flatten(test));
console.log(Array.isArray(test[2]));
