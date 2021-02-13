/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNilOrEmpty } = require('../../../dist/lib/es5');

describe('isNilOrEmpty', () => {  
  test('true', () => {
    expect(isNilOrEmpty(null)).toBe(true);
    expect(isNilOrEmpty(undefined)).toBe(true);
    expect(isNilOrEmpty('')).toBe(true);
    expect(isNilOrEmpty([])).toBe(true);
    expect(isNilOrEmpty({})).toBe(true);
  });
  
  test('false', () => {
    expect(isNilOrEmpty('  ')).toBe(false);
    expect(isNilOrEmpty({x: 'x'})).toBe(false);
    expect(isNilOrEmpty([25])).toBe(false);
    expect(isNilOrEmpty(0)).toBe(false);
    expect(isNilOrEmpty(true)).toBe(false);
    expect(isNilOrEmpty(false)).toBe(false);
    expect(isNilOrEmpty(() => undefined)).toBe(false);
    expect(isNilOrEmpty(Symbol('my symbol'))).toBe(false);
  });

  test('any => true', () => {
    expect(isNilOrEmpty.any(null)).toBe(true);
    expect(isNilOrEmpty.any(undefined)).toBe(true);
    expect(isNilOrEmpty.any('')).toBe(true);
    expect(isNilOrEmpty.any([])).toBe(true);
    expect(isNilOrEmpty.any({})).toBe(true);

    expect(isNilOrEmpty.any('test', 0, 1, ['test'], null)).toBe(true);
    expect(isNilOrEmpty.any('test', 0, 1, ['test'], undefined)).toBe(true);
    expect(isNilOrEmpty.any('test', 0, 1, ['test'], '')).toBe(true);
    expect(isNilOrEmpty.any('test', 0, 1, ['test'], [])).toBe(true);
    expect(isNilOrEmpty.any('test', 0, 1, ['test'], {})).toBe(true);
  });

  test('any => false', () => {
    expect(isNilOrEmpty.any('  ')).toBe(false);
    expect(isNilOrEmpty.any({x: 'x'})).toBe(false);
    expect(isNilOrEmpty.any([25])).toBe(false);
    expect(isNilOrEmpty.any(0)).toBe(false);
    expect(isNilOrEmpty.any(true)).toBe(false);
    expect(isNilOrEmpty.any(false)).toBe(false);
    expect(isNilOrEmpty.any(() => undefined)).toBe(false);
    expect(isNilOrEmpty.any(Symbol('my symbol'))).toBe(false);

    expect(isNilOrEmpty.any('test', 0, 1, ['test'])).toBe(false);
  });

  test('all => true', () => {
    expect(isNilOrEmpty.all(null)).toBe(true);
    expect(isNilOrEmpty.all(undefined)).toBe(true);
    expect(isNilOrEmpty.all('')).toBe(true);
    expect(isNilOrEmpty.all([])).toBe(true);
    expect(isNilOrEmpty.all({})).toBe(true);

    expect(isNilOrEmpty.all(null, undefined, '', [], {})).toBe(true);
  });
  
  test('all => false', () => {
    expect(isNilOrEmpty.all('  ')).toBe(false);
    expect(isNilOrEmpty.all({x: 'x'})).toBe(false);
    expect(isNilOrEmpty.all([25])).toBe(false);
    expect(isNilOrEmpty.all(0)).toBe(false);
    expect(isNilOrEmpty.all(true)).toBe(false);
    expect(isNilOrEmpty.all(false)).toBe(false);
    expect(isNilOrEmpty.all(() => undefined)).toBe(false);
    expect(isNilOrEmpty.all(Symbol('my symbol'))).toBe(false);

    expect(isNilOrEmpty.all('test', 0, 1, ['test'], null)).toBe(false);
  });
});