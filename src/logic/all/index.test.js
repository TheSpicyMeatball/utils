/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { all } = require('../../../dist/lib/es5');

describe('all', () => {
  const comparer = value => value > 0;

  test('basic', () => {
    expect(all(comparer, 25, 7)).toBe(true);
    expect(all(comparer, -25, -7)).toBe(false);
  });
  
  test('empty', () => {
    expect(all(comparer)).toBe(false);
  });
});