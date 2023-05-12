const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {
  const words1 = ["ground", "control", "to", "major", "tom"];
  const words2 = ["just", "testing"];
  const numbers = [1, 2, 3, 4, 5];

  it("should return [ 'g', 'c', 't', 'm', 't' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(
      map(words1, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
  it("should return [ 'u', 'e' ] for 'words2, word => word[1]'", () => {
    assert.deepEqual(
      map(words2, (word) => word[1]),
      ["u", "e"]
    );
  });
  it("should return [ 2, 4, 6, 8, 10 ] for 'numbers, nb => nb * 2'", () => {
    assert.deepEqual(
      map(numbers, (nb) => nb * 2),
      [2, 4, 6, 8, 10]
    );
  });
});
