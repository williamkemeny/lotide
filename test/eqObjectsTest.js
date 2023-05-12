const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = {
    size: "medium",
    color: "red",
    sleeveLength: "long",
  };
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = {
    size: "medium",
    colors: ["red", "blue"],
  };
  const longSleeveMultiColorShirtObject = {
    size: "medium",
    colors: ["red", "blue"],
    sleeveLength: "long",
  };
  it("Should return true", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("Return false", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("Return true", () => {
    assert.strictEqual(
      eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
      true
    );
  });
  it("Return false", () => {
    assert.strictEqual(
      eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
      false
    );
  });
});
