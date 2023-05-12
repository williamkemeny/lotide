const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];

  it("should return [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should return [ 'hello', 'world' ] for (words, ['lighthouse'])", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
});
