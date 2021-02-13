/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNotNil } = require('../../../dist/lib/es5');

describe('isNotNil', () => {  
  test('true', () => {
    expect(isNotNil('')).toBe(true);
    expect(isNotNil([])).toBe(true);
    expect(isNotNil({})).toBe(true);
    expect(isNotNil(25)).toBe(true);
    expect(isNotNil(() => undefined)).toBe(true);
    expect(isNotNil(Symbol('my symbol'))).toBe(true);
  });
  
  test('false', () => {
    expect(isNotNil(undefined)).toBe(false);
    expect(isNotNil(null)).toBe(false);
  });

  test('any => true', () => {
    expect(isNotNil.any('')).toBe(true);
    expect(isNotNil.any([])).toBe(true);
    expect(isNotNil.any({})).toBe(true);
    expect(isNotNil.any(25)).toBe(true);
    expect(isNotNil.any(() => undefined)).toBe(true);
    expect(isNotNil.any(Symbol('my symbol'))).toBe(true);
    
    expect(isNotNil.any(undefined, null, '', [], {}, 'test')).toBe(true);
  });
  
  test('any => false', () => {
    expect(isNotNil.any(undefined)).toBe(false);
    expect(isNotNil.any(null)).toBe(false);
    
    expect(isNotNil.any(undefined, null)).toBe(false);
  });

  test('all => true', () => {
    expect(isNotNil.all('')).toBe(true);
    expect(isNotNil.all([])).toBe(true);
    expect(isNotNil.all({})).toBe(true);
    expect(isNotNil.all(25)).toBe(true);
    expect(isNotNil.all(() => undefined)).toBe(true);
    expect(isNotNil.all(Symbol('my symbol'))).toBe(true);
    
    expect(isNotNil.all('', [], {}, 'test')).toBe(true);
  });
  
  test('all => false', () => {
    expect(isNotNil.all(undefined)).toBe(false);
    expect(isNotNil.all(null)).toBe(false);
    
    expect(isNotNil.all(undefined, null, 'test')).toBe(false);
  });
});