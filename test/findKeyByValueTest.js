const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it("Returns draka when we look up The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Returns undefined if we look up That 70s show", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});
