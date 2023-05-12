const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("should return [1] for e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("should return [4, 10] for o in 'hello hello'", () => {
    assert.deepEqual(letterPositions("hello hello").o, [4, 10]);
  });
});
