/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { last } = require('../../../dist/lib/es5');

describe('last', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(last(array)).toBe(42);
    expect(last([2, 1, 0])).toBe(0);
    expect(last(['first', 'last'])).toBe('last');
  });

  test('default', () => {
    expect(last(null)).toBe(undefined);
    expect(last(null, 'default')).toBe('default');
    expect(last(undefined, 'default')).toBe('default');
    expect(last(25, 'default')).toBe('default');
  });
});