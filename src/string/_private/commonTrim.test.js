/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { commonTrim } = require('../../../dist/lib/es5/string/_private/commonTrim');

describe('commonTrim', () => {
  test('basic', () => {
    expect(commonTrim('start', '   The quick brown fox    ')).toBe('The quick brown fox    ');
    expect(commonTrim('end', '   The quick brown fox    ')).toBe('   The quick brown fox');
    expect(commonTrim('start', ' foxThe quick brown fox fox fox', ' fox') ).toBe('The quick brown fox fox fox');
    expect(commonTrim('end', ' foxThe quick brown fox fox fox', ' fox') ).toBe(' foxThe quick brown');
    expect(commonTrim('start', '  fox The quick brown   fox', ['fox', 'brown', ' ']) ).toBe('The quick brown   fox');
    expect(commonTrim('end', '  fox The quick brown   fox', ['fox', 'brown', ' ']) ).toBe('  fox The quick');
  });

  test('multiline', () => {
    expect(commonTrim('start', '   The quick brown fox    \n   The quick brown fox    ', ' ', true)).toBe('The quick brown fox    \nThe quick brown fox    ');
    expect(commonTrim('end', '   The quick brown fox    \n   The quick brown fox    ', ' ', true)).toBe('   The quick brown fox\n   The quick brown fox');
  });
  
  test('empty', () => {
    expect(commonTrim('start', null)).toBe('');
    expect(commonTrim('start', undefined)).toBe('');
    expect(commonTrim('start', 25)).toBe('');
  });
});