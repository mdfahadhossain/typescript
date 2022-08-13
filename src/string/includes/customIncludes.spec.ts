import './customIncludes';

describe('String.prototype.customIncludes', () => {
  const str0 = 'Hello world',
    search0 = 'world';
  test(`string: '${str0}', query: '${search0}'`, () => {
    expect(str0.customIncludes(search0)).toBe(str0.includes(search0));
  });

  const str1 = 'How are you?',
    search1 = 'are',
    position1 = 8;
  test(`string: '${str1}', query: '${search1}', position: '${position1}'`, () => {
    expect(str1.customIncludes(search1, position1)).toBe(str1.includes(search1, position1));
  });
});
