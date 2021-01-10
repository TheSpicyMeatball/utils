/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isDate } = require('../../../dist/lib/es5');

describe('isDate', () => {
  test('basic', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate('')).toBe(false);
    expect(isDate(25)).toBe(false);
    expect(isDate(false)).toBe(false);
    expect(isDate(() => undefined)).toBe(false);
    expect(isDate(Symbol('symbol'))).toBe(false);
    expect(isDate(new Date())).toBe(true);
  });
});