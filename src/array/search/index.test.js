/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { search } = require('../../../dist/lib/es5');

describe('search', () => {
  const array = [
    { name: 'John Doe', address: '123 Sesame Street', amount: 1000, date: new Date(1990, 10, 10) },
    { name: 'Jane Doe', address: '456 Walnut Street', amount: 500, date: new Date(1990, 10, 10) },
  ];

  test('non-array input', () => {
    expect(search('test text', 'john')).toStrictEqual([]);
  });
  
  test('basic', () => {
    expect(search(array, 'john')).toStrictEqual([{ name: 'John Doe', address: '123 Sesame Street', amount: 1000, date: new Date(1990, 10, 10) }]);
  });

  test('basic case sensitive', () => {
    expect(search(array, 'john', { caseSensitive: true })).toStrictEqual([]);
  });

  test('multiple search terms with no matches', () => {
    expect(search(array, ['john', '456'])).toStrictEqual([]);
  });

  test('multiple search terms with matches', () => {
    expect(search(array, ['john', '123'])).toStrictEqual([{ name: 'John Doe', address: '123 Sesame Street', amount: 1000, date: new Date(1990, 10, 10) }]);
  });

  test('multiple search terms with matches, case sensitive', () => {
    expect(search(array, ['john', '123'], { caseSensitive: true })).toStrictEqual([]);
  });

  test('searching numbers', () => {
    expect(search(array, '1000')).toStrictEqual([{ name: 'John Doe', address: '123 Sesame Street', amount: 1000, date: new Date(1990, 10, 10) }]);
  });

  test('specifying keys, no match', () => {
    expect(search(array, '123', { keys: ['amount'] })).toStrictEqual([]);
  });

  test('specifying keys, with partial match', () => {
    expect(search(array, '100', { keys: ['amount'] })).toStrictEqual([{ name: 'John Doe', address: '123 Sesame Street', amount: 1000, date: new Date(1990, 10, 10) }]);
  });
});