const eqArrays = require("../eqArrays");

const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("Returns true", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("Returns false", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("Returns true", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("Returns false", () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});
