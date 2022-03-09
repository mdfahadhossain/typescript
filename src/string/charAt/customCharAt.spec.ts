import './customCharAt';

describe('String.prototype.customCharAt', () => {
  const input = 'Hello';
  test(`From '${input}' with index 1, should return 'e'`, () => {
    expect(input.customCharAt(1)).toBe(input.charAt(1));
  });

  test(`From '${input}' with index -1, should return ''`, () => {
    expect(input.customCharAt(-1)).toBe(input.charAt(-1));
  });

  test(`From '${input}' with index 20, should return ''`, () => {
    expect(input.customCharAt(20)).toBe(input.charAt(20));
  });
});
