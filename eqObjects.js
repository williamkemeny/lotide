// const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let object2Keys = Object.keys(object2);
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (
      object2Keys.includes(key) === false ||
      object1[key] !== object2[key]
    ) {
      return false;
    }
  }
  return true;
};

// Tests
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// assertEqual(
//   eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
//   true
// ); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// assertEqual(
//   eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
//   false
// ); // => false

module.exports = eqObjects;
