/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { trim } = require('../../../dist/lib/es5');

describe('trim', () => {
  test('basic', () => {
    expect(trim('   The quick brown fox    ')).toBe('The quick brown fox');
    expect(trim(' foxThe quick brown fox fox fox', ' fox') ).toBe('The quick brown');
    expect(trim('  fox The quick brown   fox', ['fox', 'brown', ' ']) ).toBe('The quick');
  });

  test('multiline', () => {
    expect(trim('   The quick brown fox    \n   The quick brown fox    ', ' ', true)).toBe('The quick brown fox\nThe quick brown fox');
  });
  
  test('empty', () => {
    expect(trim(null)).toBe('');
    expect(trim(undefined)).toBe('');
    expect(trim(25)).toBe('');
  });
});