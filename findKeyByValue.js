// const assertEqual = require("./assertEqual");

const findKeyByValue = function (objKeys, value) {
  for (let key in objKeys) {
    if (objKeys[key] === value) {
      return key;
    }
  }
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;
