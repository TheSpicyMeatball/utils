/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { take } = require('../../../dist/lib/es5/index');

describe('take', () => {
  const array = [1, 2, 3];

  test('basic', () => {
    expect(take(array, 2)).toStrictEqual([1, 2]);
    expect(take(array, -2)).toStrictEqual([2, 3]);
    expect(take(array, 25)).toStrictEqual(array);
    expect(take(array, -25)).toStrictEqual(array);
  });

  test('empty', () => {
    expect(take([], 2)).toStrictEqual([]);
    expect(take(null, 2)).toStrictEqual([]);
    expect(take(undefined, 2)).toStrictEqual([]);
    expect(take([], 2)).toStrictEqual([]);
    expect(take('test', 2)).toStrictEqual([]);
  });
});