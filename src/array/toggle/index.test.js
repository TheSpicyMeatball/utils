/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { toggle } = require('../../../dist/lib/es5');

describe('toggle', () => {
  const array = [1, 2, 3];

  test('basic', () => {
    expect(toggle(array, 2)).toStrictEqual([1, 3]);
    expect(toggle(array, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  test('empty', () => {
    expect(toggle([], 2)).toStrictEqual([2]);
    expect(toggle(null, 2)).toStrictEqual([2]);
    expect(toggle(undefined, 2)).toStrictEqual([2]);
  });
});