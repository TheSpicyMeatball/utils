/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { removeAt } = require('../../../dist/lib/es5');

describe('removeAt', () => {
  const array = [7, 25, 21];

  test('basic', () => {
    expect(removeAt(array, 1)).toStrictEqual([7, 21]);
    expect(removeAt(array, -1)).toStrictEqual([7, 25]);
  });

  test('multiple indexes', () => {
    const array = [0, 1, 2, 3, 4, 5];
    expect(removeAt(array, 1, 2)).toStrictEqual([0, 3, 4, 5]);
    expect(removeAt(array, -2, -4)).toStrictEqual([0, 1, 3, 5]);
  });

  test('edge cases', () => {
    const array = [0, 1, 2, 3, 4, 5];
    expect(removeAt(null, 1)).toBe(null);
    expect(removeAt(undefined, 1)).toBe(undefined);
    expect(removeAt(25, 1)).toBe(25);
    expect(removeAt(array, 'dog')).toStrictEqual(array);
    expect(removeAt(array, 100)).toStrictEqual(array);
    expect(removeAt(array, -100)).toStrictEqual(array);
    
    expect(removeAt(array, -100, 2)).toStrictEqual([0, 1, 3, 4, 5]);
  });
});