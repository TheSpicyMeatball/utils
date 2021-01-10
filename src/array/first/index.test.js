/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { first } = require('../../../dist/lib/es5');

describe('first', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(first(array)).toBe(7);
    expect(first([0, 1, 2])).toBe(0);
    expect(first(['first', 'second'])).toBe('first');
  });

  test('default', () => {
    expect(first(null)).toBe(undefined);
    expect(first(null, 'default')).toBe('default');
    expect(first(undefined, 'default')).toBe('default');
    expect(first(25, 'default')).toBe('default');
  });
});