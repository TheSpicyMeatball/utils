/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNil } = require('../../../dist/lib/es5');

describe('isNil', () => {
  test('true', () => {
    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
  });
  
  test('false', () => {
    expect(isNil('')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil(25)).toBe(false);
    expect(isNil(() => undefined)).toBe(false);
    expect(isNil(Symbol('my symbol'))).toBe(false);
  });
});