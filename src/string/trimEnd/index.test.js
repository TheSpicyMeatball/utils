/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { trimEnd } = require('../../../dist/lib/es5');

describe('trimEnd', () => {
  test('basic', () => {
    expect(trimEnd('   The quick brown fox    ')).toBe('   The quick brown fox');
    expect(trimEnd(' foxThe quick brown fox fox fox', ' fox') ).toBe(' foxThe quick brown');
    expect(trimEnd('  fox The quick brown   fox', ['fox', 'brown', ' ']) ).toBe('  fox The quick');
  });

  test('multiline', () => {
    expect(trimEnd('   The quick brown fox    \n   The quick brown fox    ', ' ', true)).toBe('   The quick brown fox\n   The quick brown fox');
  });
  
  test('empty', () => {
    expect(trimEnd(null)).toBe('');
    expect(trimEnd(undefined)).toBe('');
    expect(trimEnd(25)).toBe('');
  });
});