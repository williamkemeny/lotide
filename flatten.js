//const eqArrays = require("./eqArrays");

//const assertArraysEqual = require("./assertArraysEqual");

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

// let test = [1, 2, [3, 4], 5, [6]];
// console.log(flatten(test));
// console.log(Array.isArray(test[2]));

module.exports = flatten;
