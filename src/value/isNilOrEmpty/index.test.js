/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNilOrEmpty } = require('../../../dist/lib/es5');

describe('isNilOrEmpty', () => {  
  test('true', () => {
    expect(isNilOrEmpty(null)).toBe(true);
    expect(isNilOrEmpty(undefined)).toBe(true);
    expect(isNilOrEmpty('')).toBe(true);
    expect(isNilOrEmpty([])).toBe(true);
    expect(isNilOrEmpty({})).toBe(true);
  });
  
  test('false', () => {
    expect(isNilOrEmpty('  ')).toBe(false);
    expect(isNilOrEmpty({x: 'x'})).toBe(false);
    expect(isNilOrEmpty([25])).toBe(false);
    expect(isNilOrEmpty(0)).toBe(false);
    expect(isNilOrEmpty(true)).toBe(false);
    expect(isNilOrEmpty(false)).toBe(false);
    expect(isNilOrEmpty(() => undefined)).toBe(false);
    expect(isNilOrEmpty(Symbol('my symbol'))).toBe(false);
  });
});