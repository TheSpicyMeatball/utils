/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { any } = require('../../../dist/lib/es5');

describe('any', () => {
  const comparer = value => value > 10;

  test('basic', () => {
    expect(any(comparer, 25, 7)).toBe(true);
    expect(any(comparer, 2, 7)).toBe(false);
  });
  
  test('empty', () => {
    expect(any(comparer)).toBe(false);
  });
});