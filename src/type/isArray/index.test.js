/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isArray } = require('../../../dist/lib/es5/index');

describe('isArray', () => {
  test('basic', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isArray('')).toBe(false);
    expect(isArray(25)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(() => undefined)).toBe(false);
    expect(isArray(Symbol('symbol'))).toBe(false);
    expect(isArray(new Date())).toBe(false);
  });
});