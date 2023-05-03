//const assertEqual = require("./assertEqual");

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

// tests
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe",
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
