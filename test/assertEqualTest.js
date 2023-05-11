const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#assertEqual", () => {
  it("Returns false", () => {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("Returns true", () => {
    assert.equal(assertEqual(1, 1), true);
  });
});
