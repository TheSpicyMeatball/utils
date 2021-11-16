/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { search } = require('../../../dist/lib/es5');

describe('search', () => {
  const array = [
    { name: 'John Doe', address: '123 Sesame Street', amount: 1000 },
    { name: 'Jane Doe', address: '456 Walnut Street', amount: 500 },
  ];

  test('non-array input', () => {
    expect(search('test text', 'john')).toStrictEqual([]);
  });
  
  test('basic', () => {
    expect(search(array, 'john')).toStrictEqual([{ name: 'John Doe', address: '123 Sesame Street', amount: 1000 }]);
  });

  test('basic case sensitive', () => {
    expect(search(array, 'john', { caseSensitive: true })).toStrictEqual([]);
  });

  test('multiple search terms with no matches', () => {
    expect(search(array, ['john', '456'])).toStrictEqual([]);
  });

  test('multiple search terms with matches', () => {
    expect(search(array, ['john', '123'])).toStrictEqual([{ name: 'John Doe', address: '123 Sesame Street', amount: 1000 }]);
  });

  test('multiple search terms with matches, case sensitive', () => {
    expect(search(array, ['john', '123'], { caseSensitive: true })).toStrictEqual([]);
  });

  // test('edge cases', () => {
  //   expect(reverse(null)).toStrictEqual([]);
  //   expect(reverse(undefined)).toStrictEqual([]);
  //   expect(reverse([])).toStrictEqual([]);
  //   expect(reverse(25)).toStrictEqual([]);
  // });
});