/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { limit } = require('../../../dist/lib/es5/index');

describe('limit', () => {
  test('basic', () => {
    expect(limit([0, 1, 2], 10, 3)).toStrictEqual([0, 1, 2, 3]);
    expect(limit([0, 1, 2], 3, 3)).toStrictEqual([0, 1, 2]);
  });

  test('edge cases', () => {
    expect(limit([0, 1, 2], -10, 3)).toStrictEqual([0, 1, 2]);
    expect(limit(null, -10, 3)).toStrictEqual([]);
    expect(limit(25, 10, 3)).toStrictEqual([3]);
  });
});