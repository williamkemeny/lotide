//const assertEqual = require("./assertEqual");

const head = function () {
  if (arguments[0] === undefined) {
    return undefined;
  } else {
    return arguments[0][0];
  }
};

module.exports = head;
