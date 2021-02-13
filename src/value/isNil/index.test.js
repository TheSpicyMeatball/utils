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

  test('any => true', () => {
    expect(isNil.any(undefined)).toBe(true);
    expect(isNil.any(null)).toBe(true);

    expect(isNil.any('test', 0, 1, ['test'], null)).toBe(true);
  });

  test('any => false', () => {
    expect(isNil.any('')).toBe(false);
    expect(isNil.any([])).toBe(false);
    expect(isNil.any({})).toBe(false);
    expect(isNil.any(25)).toBe(false);
    expect(isNil.any(() => undefined)).toBe(false);
    expect(isNil.any(Symbol('my symbol'))).toBe(false);
    
    expect(isNil.any('test', 0, 1, ['test'])).toBe(false);
  });

  test('all => true', () => {
    expect(isNil.all(undefined)).toBe(true);
    expect(isNil.all(null)).toBe(true);

    expect(isNil.all(undefined, null)).toBe(true);
  });

  test('all => false', () => {
    expect(isNil.all('')).toBe(false);
    expect(isNil.all([])).toBe(false);
    expect(isNil.all({})).toBe(false);
    expect(isNil.all(25)).toBe(false);
    expect(isNil.all(() => undefined)).toBe(false);
    expect(isNil.all(Symbol('my symbol'))).toBe(false);
    
    expect(isNil.all('test', 0, 1, ['test'])).toBe(false);
  });
});