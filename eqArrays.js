const eqArrays = function () {
  let output = true;
  if (arguments[0].length !== arguments[1].length) {
    return false;
  }
  for (let i = 0; i < arguments[0].length; i++) {
    if (Array.isArray(arguments[0][i]) || Array.isArray(arguments[1][i])) {
      output = output && eqArrays(arguments[0][i], arguments[1][i]);
    } else if (arguments[0][i] !== arguments[1][i]) {
      return false;
    }
  }
  return output;
};

module.exports = eqArrays;
