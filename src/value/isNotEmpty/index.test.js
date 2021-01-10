/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNotEmpty } = require('../../../dist/lib/es5');

describe('isNotEmpty', () => {  
  test('true', () => {
    expect(isNotEmpty('  ')).toBe(true);
    expect(isNotEmpty({x: 'x'})).toBe(true);
    expect(isNotEmpty([25])).toBe(true);
    expect(isNotEmpty(0)).toBe(true);
    expect(isNotEmpty(true)).toBe(true);
    expect(isNotEmpty(false)).toBe(true);
    expect(isNotEmpty(() => undefined)).toBe(true);
    expect(isNotEmpty(Symbol('my symbol'))).toBe(true);
  });

  
  test('false', () => {
    expect(isNotEmpty(undefined)).toBe(false);
    expect(isNotEmpty(null)).toBe(false);
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty([])).toBe(false);
    expect(isNotEmpty({})).toBe(false);
  });
});