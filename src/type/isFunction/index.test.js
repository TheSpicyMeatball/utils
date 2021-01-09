/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isFunction } = require('../../../dist/lib/es5/index');

describe('isFunction', () => {
  test('basic', () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(25)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(() => undefined)).toBe(true);
    expect(isFunction(Symbol('symbol'))).toBe(false);
    expect(isFunction(new Date())).toBe(false);
  });
});