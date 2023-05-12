const without = function (array, values) {
  for (let index = 0; index < values.length; index++) {
    array = array.filter((item) => item !== values[index]);
  }
  return array;
};

module.exports = without;
