/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { trimStart } = require('../../../dist/lib/es5');

describe('trimStart', () => {
  test('basic', () => {
    expect(trimStart('   The quick brown fox    ')).toBe('The quick brown fox    ');
    expect(trimStart(' foxThe quick brown fox fox fox', ' fox') ).toBe('The quick brown fox fox fox');
    expect(trimStart('  fox The quick brown   fox', ['fox', 'brown', ' ']) ).toBe('The quick brown   fox');
  });

  test('multiline', () => {
    expect(trimStart('   The quick brown fox    \n   The quick brown fox    ', ' ', true)).toBe('The quick brown fox    \nThe quick brown fox    ');
  });
  
  test('empty', () => {
    expect(trimStart(null)).toBe('');
    expect(trimStart(undefined)).toBe('');
    expect(trimStart(25)).toBe('');
  });
});