/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { fill } = require('../../../dist/lib/es5');

describe('fill', () => {
  test('basic', () => {
    expect(fill(5, 1)).toStrictEqual([1, 1, 1, 1, 1]);
    expect(fill(-5, 1)).toStrictEqual([]);
    expect(fill(5)).toStrictEqual([undefined, undefined, undefined, undefined, undefined]);
  });
});