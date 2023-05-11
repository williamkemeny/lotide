const assertObjectsEqual = require("../assertObjectsEqual");
const assert = require("chai").assert;

describe("#assertObjectsEqual", () => {
  it("Returns a string that tests our assertion", () => {
    assert.equal(
      assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }),
      "✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }"
    );
  });
});
