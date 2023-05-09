const takeUntil = function (array, callback) {
  if (Array.isArray(array) !== true) {
    return "This is not an array.";
  }
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;
