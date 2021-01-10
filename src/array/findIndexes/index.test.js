/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { findIndexes } = require('../../../dist/lib/es5');

describe('findIndexes', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(findIndexes(array, item => item >= 25)).toStrictEqual([1, 4]);
    expect(findIndexes(array, item => item === 'test')).toStrictEqual([]);
  });

  test('empty', () => {
    expect(findIndexes(null, item => item >= 25)).toStrictEqual([]);
    expect(findIndexes(undefined, item => item >= 25)).toStrictEqual([]);
    expect(findIndexes(array, undefined)).toStrictEqual([]);
  });
});