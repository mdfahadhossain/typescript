import './customAt';

describe('String.prototype.customAt', () => {
  const input = 'Hello';
  test(`From '${input}' with index 1, should return 'e'`, () => {
    expect(input.customAt(1)).toBe(input.at(1));
  });

  test(`From '${input}' with index -5, should return 'H'`, () => {
    expect(input.customAt(-5)).toBe(input.at(-5));
  });

  test(`From '${input}' with index 20, should return undefined`, () => {
    expect(input.customAt(20)).toBe(input.at(20));
  });

  test(`From '${input}' with index -15, should return undefined`, () => {
    expect(input.customAt(-15)).toBe(input.at(-15));
  });
});
