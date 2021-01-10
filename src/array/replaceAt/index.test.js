/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { replaceAt } = require('../../../dist/lib/es5');

describe('replaceAt', () => {
  const array = [7, 25, 21];

  test('basic', () => {
    expect(replaceAt(array, 0, 97)).toStrictEqual([97, 25, 21]);
    expect(replaceAt(array, 1, 97)).toStrictEqual([7, 97, 21]);
    expect(replaceAt(array, 2, 97)).toStrictEqual([7, 25, 97]);
    expect(replaceAt(array, -1, 97)).toStrictEqual([7, 25, 97]);
  });

  test('edge cases', () => {
    expect(replaceAt(array, 4, 97)).toStrictEqual([7, 25, 21, undefined, 97]);
    expect(replaceAt(null, 1, 97)).toStrictEqual([undefined, 97]);
    expect(replaceAt(null, -1, 97)).toStrictEqual([97]);
    expect(replaceAt(null, -5, 97)).toStrictEqual([97]);
    expect(replaceAt(25, 1, 97)).toBe(25);
    expect(replaceAt(array, 'dog', 97)).toStrictEqual(array);
  });
});