import './customEndsWith';

describe('String.prototype.customEndsWith', () => {
  const str = 'I am good. What about you?',
    search = 'good';
  test(`string: '${str}' with end '9' should end with '${search}'`, () => {
    expect(str.customEndsWith(search, 9)).toBe(str.endsWith(search, 9));
  });

  const search1 = 'you?';
  test(`string: '${str}' with no endPosition should end with '${search1}'`, () => {
    expect(str.customEndsWith(search1)).toBe(str.endsWith(search1));
  });
});
