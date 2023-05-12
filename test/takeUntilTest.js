const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for thhe given array", () => {
    assert.deepEqual(
      takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], (x) => x < 0),
      [1, 2, 5, 7, 2]
    );
  });
  it("returns [I've, been, to, Hollywood] for the given array", () => {
    assert.deepEqual(
      takeUntil(
        [
          "I've",
          "been",
          "to",
          "Hollywood",
          ",",
          "I've",
          "been",
          "to",
          "Redwood",
        ],
        (x) => x === ","
      ),
      ["I've", "been", "to", "Hollywood"]
    );
  });
});
