/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isSymbol } = require('../../../dist/lib/es5');

describe('isSymbol', () => {
  test('basic', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(25)).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol(() => undefined)).toBe(false);
    expect(isSymbol(Symbol('symbol'))).toBe(true);
    expect(isSymbol(new Date())).toBe(false);
  });
});