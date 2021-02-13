/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNotNilOrEmpty } = require('../../../dist/lib/es5');

describe('isNotNilOrEmpty', () => { 
  test('true', () => {
    expect(isNotNilOrEmpty('  ')).toBe(true);
    expect(isNotNilOrEmpty({x: 'x'})).toBe(true);
    expect(isNotNilOrEmpty([25])).toBe(true);
    expect(isNotNilOrEmpty(0)).toBe(true);
    expect(isNotNilOrEmpty(true)).toBe(true);
    expect(isNotNilOrEmpty(false)).toBe(true);
    expect(isNotNilOrEmpty(() => undefined)).toBe(true);
    expect(isNotNilOrEmpty(Symbol('my symbol'))).toBe(true);
  });

  test('false', () => {
    expect(isNotNilOrEmpty(null)).toBe(false);
    expect(isNotNilOrEmpty(undefined)).toBe(false);
    expect(isNotNilOrEmpty('')).toBe(false);
    expect(isNotNilOrEmpty([])).toBe(false);
    expect(isNotNilOrEmpty({})).toBe(false);
  });

  test('any => true', () => {
    expect(isNotNilOrEmpty.any('  ')).toBe(true);
    expect(isNotNilOrEmpty.any({x: 'x'})).toBe(true);
    expect(isNotNilOrEmpty.any([25])).toBe(true);
    expect(isNotNilOrEmpty.any(0)).toBe(true);
    expect(isNotNilOrEmpty.any(true)).toBe(true);
    expect(isNotNilOrEmpty.any(false)).toBe(true);
    expect(isNotNilOrEmpty.any(() => undefined)).toBe(true);
    expect(isNotNilOrEmpty.any(Symbol('my symbol'))).toBe(true);

    expect(isNotNilOrEmpty.any(null, undefined, '', [], {}, 'test')).toBe(true);
  });

  test('any => false', () => {
    expect(isNotNilOrEmpty.any(null)).toBe(false);
    expect(isNotNilOrEmpty.any(undefined)).toBe(false);
    expect(isNotNilOrEmpty.any('')).toBe(false);
    expect(isNotNilOrEmpty.any([])).toBe(false);
    expect(isNotNilOrEmpty.any({})).toBe(false);

    expect(isNotNilOrEmpty.any(null, undefined, '', [], {})).toBe(false);
  });

  test('all => true', () => {
    expect(isNotNilOrEmpty.all('  ')).toBe(true);
    expect(isNotNilOrEmpty.all({x: 'x'})).toBe(true);
    expect(isNotNilOrEmpty.all([25])).toBe(true);
    expect(isNotNilOrEmpty.all(0)).toBe(true);
    expect(isNotNilOrEmpty.all(true)).toBe(true);
    expect(isNotNilOrEmpty.all(false)).toBe(true);
    expect(isNotNilOrEmpty.all(() => undefined)).toBe(true);
    expect(isNotNilOrEmpty.all(Symbol('my symbol'))).toBe(true);

    expect(isNotNilOrEmpty.all('test', 0, 1, ['test'])).toBe(true);
  });

  test('all => false', () => {
    expect(isNotNilOrEmpty.all(null)).toBe(false);
    expect(isNotNilOrEmpty.all(undefined)).toBe(false);
    expect(isNotNilOrEmpty.all('')).toBe(false);
    expect(isNotNilOrEmpty.all([])).toBe(false);
    expect(isNotNilOrEmpty.all({})).toBe(false);
    
    expect(isNotNilOrEmpty.any(null, undefined, '', [], {})).toBe(false);
  });
});