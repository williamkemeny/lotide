const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  it('Counts only  what it\'s told to count and returns an object with the count. When we check result1["Jason"] it should return 1', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('When we check result1["Karima"] it should return 0', () => {
    assert.strictEqual(result1["Karima"], 0);
  });
  it('When we check result1["Karima"] it should return undefined', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});
