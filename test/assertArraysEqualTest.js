const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

describe("#assertArraysEqual", () => {
  it("Returns a string that tests our assertion", () => {
    assert.equal(
      assertArraysEqual([1, 2, 3], [1, 2, 3]),
      "We can say that the inputs 1,2,3 and 1,2,3 being equal is true."
    );
  });
});
