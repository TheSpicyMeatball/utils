/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNumber } = require('../../../dist/lib/es5');

describe('isNumber', () => {
  test('basic', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber(25)).toBe(true);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(() => undefined)).toBe(false);
    expect(isNumber(Symbol('symbol'))).toBe(false);
    expect(isNumber(new Date())).toBe(false);
  });
});