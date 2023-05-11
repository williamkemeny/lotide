const middle = function (array) {
  let middle = 0;

  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    middle = Math.floor(array.length / 2);
    return array.slice(middle - 1, middle + 1);
  } else {
    middle = Math.floor(array.length / 2);
    return array.slice(middle, middle + 1);
  }
};

module.exports = middle;
