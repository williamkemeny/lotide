const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return "No key matches the condition";
};

module.exports = findKey;
