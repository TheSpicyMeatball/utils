/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { move } = require('../../../dist/lib/es5');

describe('move', () => {
  const array = [7, 25, 21, 42];

  test('basic', () => {
    expect(move(array, 0, 3)).toStrictEqual([25, 21, 42, 7]);
    expect(move(array, 1, 2)).toStrictEqual([7, 21, 25, 42]);
    expect(move(array, 1, 3)).toStrictEqual([7, 21, 42, 25]);
    expect(move(array, 3, 0)).toStrictEqual([42, 7, 25, 21]);
    expect(move(array, 2, 1)).toStrictEqual([7, 21, 25, 42]);
  });

  test('edge cases', () => {
    expect(move(null, 1, 2)).toBe(null);
    expect(move(undefined, 1, 2)).toBe(undefined);
    expect(move(25, 1, 2)).toBe(25);
    expect(move(array, 2, 2)).toStrictEqual(array);
    expect(move(array, 2, 100)).toStrictEqual(array);
    expect(move(array, -100, 2)).toStrictEqual(array);
  });
});