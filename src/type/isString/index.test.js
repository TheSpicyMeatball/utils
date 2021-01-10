/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isString } = require('../../../dist/lib/es5');

describe('isString', () => {
  test('basic', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString('')).toBe(true);
    expect(isString(25)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(() => undefined)).toBe(false);
    expect(isString(Symbol('symbol'))).toBe(false);
    expect(isString(new Date())).toBe(false);
  });
});