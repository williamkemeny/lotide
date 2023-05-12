const countOnly = function (allItems, itemsToCount) {
  let nameCount = {};
  let count = 0;
  for (let name in itemsToCount) {
    if (itemsToCount[name] === true) {
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] == name) {
          count++;
        }
      }
      nameCount[name] = count;
      count = 0;
    }
  }
  return nameCount;
};
module.exports = countOnly;
