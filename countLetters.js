const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let letterCount = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      // nothing
    } else if (letterCount[string[i]] === undefined) {
      letterCount[string[i]] = 1;
    } else {
      letterCount[string[i]]++;
    }
  }

  return letterCount;
};

console.log(countLetters("L H L"));
