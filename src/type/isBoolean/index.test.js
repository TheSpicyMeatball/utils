/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isBoolean } = require('../../../dist/lib/es5');

describe('isBoolean', () => {
  test('basic', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(25)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(() => undefined)).toBe(false);
    expect(isBoolean(Symbol('symbol'))).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
  });
});