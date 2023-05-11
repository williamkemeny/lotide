const tail = function () {
  if (arguments[0].length === 0 || arguments[0].length === 1) {
    return [];
  } else {
    let tail = arguments[0].map((x) => x);
    tail.shift();
    return tail;
  }
};

module.exports = tail;
