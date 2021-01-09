/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { capitalize } = require('../../../dist/lib/es5/index');

describe('capitalize', () => {
  test('basic', () => {
    expect(capitalize('fox')).toBe('Fox');
    expect(capitalize('the quick brown fox') ).toBe('The Quick Brown Fox');
  });
  
  test('empty', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize([])).toBe('');
  });
});