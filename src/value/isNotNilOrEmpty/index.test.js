/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNotNilOrEmpty } = require('../../../dist/lib/es5');

describe('isNotNilOrEmpty', () => { 
  test('true', () => {
    expect(isNotNilOrEmpty('  ')).toBe(true);
    expect(isNotNilOrEmpty({x: 'x'})).toBe(true);
    expect(isNotNilOrEmpty([25])).toBe(true);
    expect(isNotNilOrEmpty(0)).toBe(true);
    expect(isNotNilOrEmpty(true)).toBe(true);
    expect(isNotNilOrEmpty(false)).toBe(true);
    expect(isNotNilOrEmpty(() => undefined)).toBe(true);
    expect(isNotNilOrEmpty(Symbol('my symbol'))).toBe(true);
  });

  test('false', () => {
    expect(isNotNilOrEmpty(null)).toBe(false);
    expect(isNotNilOrEmpty(undefined)).toBe(false);
    expect(isNotNilOrEmpty('')).toBe(false);
    expect(isNotNilOrEmpty([])).toBe(false);
    expect(isNotNilOrEmpty({})).toBe(false);
  });
});