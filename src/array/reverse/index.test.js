/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { reverse } = require('../../../dist/lib/es5');

describe('reverse', () => {
  const array = [7, 25, 21];

  test('basic', () => {
    expect(reverse(array)).toStrictEqual([21, 25, 7]);
  });

  test('edge cases', () => {
    expect(reverse(null)).toStrictEqual([]);
    expect(reverse(undefined)).toStrictEqual([]);
    expect(reverse([])).toStrictEqual([]);
    expect(reverse(25)).toStrictEqual([]);
  });
});