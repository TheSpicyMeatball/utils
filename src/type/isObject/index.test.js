/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isObject } = require('../../../dist/lib/es5');

describe('isObject', () => {
  test('basic', () => {
    expect(isObject(null)).toBe(true);
    expect(isObject(undefined)).toBe(false);
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(25)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(() => undefined)).toBe(false);
    expect(isObject(Symbol('symbol'))).toBe(false);
    expect(isObject(new Date())).toBe(false);
  });
});