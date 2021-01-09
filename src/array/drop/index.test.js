/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { drop } = require('../../../dist/lib/es5/index');

describe('drop', () => {
  const array = [1, 2, 3, 4];

  test('basic', () => {
    expect(drop(array, 3)).toStrictEqual([4]);
    expect(drop(array, 2)).toStrictEqual([3, 4]);
    expect(drop(array, 1)).toStrictEqual([2, 3, 4]);
    expect(drop(array, 0)).toStrictEqual([1, 2, 3, 4]);
    expect(drop(array, -1)).toStrictEqual([1, 2, 3]);
    expect(drop(array, -2)).toStrictEqual([1, 2]);
    expect(drop(array, -3)).toStrictEqual([1]);
    expect(drop(array, -4)).toStrictEqual([]);
    expect(drop(array, 25)).toStrictEqual([]);
    expect(drop(array, -25)).toStrictEqual([]);
  });

  test('empty', () => {
    expect(drop([], 2)).toStrictEqual([]);
    expect(drop(null, 2)).toStrictEqual([]);
    expect(drop(undefined, 2)).toStrictEqual([]);
    expect(drop('test', 2)).toStrictEqual([]);
  });
});