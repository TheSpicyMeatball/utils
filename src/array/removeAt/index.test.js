/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { removeAt } = require('../../../dist/lib/es5');

describe('removeAt', () => {
  const array = [7, 25, 21];

  test('basic', () => {
    expect(removeAt(array, 1)).toStrictEqual([7, 21]);
    expect(removeAt(array, -1)).toStrictEqual([7, 25]);
  });

  test('edge cases', () => {
    expect(removeAt(null, 1)).toBe(null);
    expect(removeAt(undefined, 1)).toBe(undefined);
    expect(removeAt(25, 1)).toBe(25);
    expect(removeAt(array, 'dog')).toStrictEqual(array);
    expect(removeAt(array, 100)).toStrictEqual(array);
    expect(removeAt(array, -100)).toStrictEqual(array);
  });
});