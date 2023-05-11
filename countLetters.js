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

module.exports = countLetters;
