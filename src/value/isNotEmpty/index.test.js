/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNotEmpty } = require('../../../dist/lib/es5');

describe('isNotEmpty', () => {  
  test('true', () => {
    expect(isNotEmpty('  ')).toBe(true);
    expect(isNotEmpty({x: 'x'})).toBe(true);
    expect(isNotEmpty([25])).toBe(true);
    expect(isNotEmpty(0)).toBe(true);
    expect(isNotEmpty(true)).toBe(true);
    expect(isNotEmpty(false)).toBe(true);
    expect(isNotEmpty(() => undefined)).toBe(true);
    expect(isNotEmpty(Symbol('my symbol'))).toBe(true);
  });

  
  test('false', () => {
    expect(isNotEmpty(undefined)).toBe(false);
    expect(isNotEmpty(null)).toBe(false);
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty([])).toBe(false);
    expect(isNotEmpty({})).toBe(false);
  });

  test('any => true', () => {
    expect(isNotEmpty.any('  ')).toBe(true);
    expect(isNotEmpty.any({x: 'x'})).toBe(true);
    expect(isNotEmpty.any([25])).toBe(true);
    expect(isNotEmpty.any(0)).toBe(true);
    expect(isNotEmpty.any(true)).toBe(true);
    expect(isNotEmpty.any(false)).toBe(true);
    expect(isNotEmpty.any(() => undefined)).toBe(true);
    expect(isNotEmpty.any(Symbol('my symbol'))).toBe(true);
    
    expect(isNotEmpty.any(undefined, null, '', [], {}, 'test')).toBe(true);
  });

  test('any => false', () => {
    expect(isNotEmpty.any(undefined)).toBe(false);
    expect(isNotEmpty.any(null)).toBe(false);
    expect(isNotEmpty.any('')).toBe(false);
    expect(isNotEmpty.any([])).toBe(false);
    expect(isNotEmpty.any({})).toBe(false);
    
    expect(isNotEmpty.any(undefined, null, '', [], {})).toBe(false);
  });

  test('all => true', () => {
    expect(isNotEmpty.all('  ')).toBe(true);
    expect(isNotEmpty.all({x: 'x'})).toBe(true);
    expect(isNotEmpty.all([25])).toBe(true);
    expect(isNotEmpty.all(0)).toBe(true);
    expect(isNotEmpty.all(true)).toBe(true);
    expect(isNotEmpty.all(false)).toBe(true);
    expect(isNotEmpty.all(() => undefined)).toBe(true);
    expect(isNotEmpty.all(Symbol('my symbol'))).toBe(true);
    
    expect(isNotEmpty.all('test', 0, 1, ['test'])).toBe(true);
  });

  test('all => false', () => {
    expect(isNotEmpty.all(undefined)).toBe(false);
    expect(isNotEmpty.all(null)).toBe(false);
    expect(isNotEmpty.all('')).toBe(false);
    expect(isNotEmpty.all([])).toBe(false);
    expect(isNotEmpty.all({})).toBe(false);
    
    expect(isNotEmpty.all('test', 0, 1, ['test'], null)).toBe(false);
  });
});