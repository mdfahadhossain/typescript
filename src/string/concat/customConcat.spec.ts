import './customConcat';

describe('String.prototype.customConcat', () => {
  const str0 = 'hello',
    values0 = ['there', ',', ' ', 'how ', 'are', ' you?'];
  test(`str: '${str0}', values: ${values0.join(', ')}`, () => {
    expect(str0.customConcat(...values0)).toBe(str0.concat(...values0));
  });

  const str1 = 'good',
    value = ' bye.';
  test(`str: '${str1}', values: ${value}`, () => {
    expect(str1.customConcat(value)).toBe(str1.concat(value));
  });

  test('Concat nothing to the string', () => {
    expect('hello'.customConcat()).toBe('hello'.concat());
  });
});
