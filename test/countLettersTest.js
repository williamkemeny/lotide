const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("Counts the letters and puts it into an object", () => {
    assert.deepEqual(countLetters("L H L"), { L: 2, H: 1 });
  });
});
