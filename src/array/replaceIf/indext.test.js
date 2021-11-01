/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { replaceIf } = require('../../../dist/lib/es5');

describe('replaceIf', () => {
  const array = [7, 25, 21];
  const predicate = item => item > 20;

  test('basic', () => {
    expect(replaceIf(array, predicate, 97)).toStrictEqual([7, 97, 97]);
    expect(replaceIf(array, predicate, 97, false)).toStrictEqual([7, 97, 21]);
  });

  test('edge cases', () => {
    // no predicate
    expect(replaceIf(array, null, 97)).toStrictEqual(array);

    // no match
    expect(replaceIf([1], predicate, 97)).toStrictEqual([1]);

    // nil or empty array
    expect(replaceIf(undefined, predicate, 97)).toStrictEqual(undefined);
    expect(replaceIf(null, predicate, 97)).toStrictEqual(null);
    expect(replaceIf([], predicate, 97)).toStrictEqual([]);

    // no array or predicate
    expect(replaceIf(null, null, 97)).toStrictEqual(null);
  });
});