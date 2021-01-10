/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { remove } = require('../../../dist/lib/es5');

describe('remove', () => {
  test('basic', () => {
    expect(remove('The quick brown fox', 'quick ')).toBe('The brown fox');
    expect(remove('The quick brown fox', 'not found')).toBe('The quick brown fox');
  });
  
  test('empty', () => {
    expect(remove(null, 'quick ')).toBe('');
    expect(remove([], 'quick ')).toBe('');
  });
});