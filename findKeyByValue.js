const findKeyByValue = function (objKeys, value) {
  for (let key in objKeys) {
    if (objKeys[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
