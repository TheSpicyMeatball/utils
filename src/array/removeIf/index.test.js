/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { removeIf } = require('../../../dist/lib/es5');

describe('removeIf', () => {
  const array = [7, 25, 21];
  const predicate = item => item > 20;

  test('basic', () => {
    expect(removeIf(array, predicate)).toStrictEqual([7]);
    expect(removeIf(array, predicate, false)).toStrictEqual([7, 21]);
  });

  test('edge cases', () => {
    // no predicate
    expect(removeIf(array, null)).toStrictEqual(array);

    // no match
    expect(removeIf([1], predicate)).toStrictEqual([1]);

    // nil or empty array
    expect(removeIf(undefined, predicate)).toStrictEqual(undefined);
    expect(removeIf(null, predicate)).toStrictEqual(null);
    expect(removeIf([], predicate)).toStrictEqual([]);

    // no array or predicate
    expect(removeIf(null, null)).toStrictEqual(null);
  });
});