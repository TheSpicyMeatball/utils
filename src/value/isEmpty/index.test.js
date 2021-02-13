/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isEmpty } = require('../../../dist/lib/es5');

describe('isEmpty', () => {
  test('true', () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });
  
  test('false', () => {
    expect(isEmpty('  ')).toBe(false);
    expect(isEmpty({x: 'x'})).toBe(false);
    expect(isEmpty([25])).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(() => undefined)).toBe(false);
    expect(isEmpty(Symbol('my symbol'))).toBe(false);
    expect(isEmpty(new Date())).toBe(false);
  });

  test('any => true', () => {
    expect(isEmpty.any(undefined)).toBe(true);
    expect(isEmpty.any(null)).toBe(true);
    expect(isEmpty.any('')).toBe(true);
    expect(isEmpty.any([])).toBe(true);
    expect(isEmpty.any({})).toBe(true);
    
    expect(isEmpty.any('test', 0, 1, ['test'], null)).toBe(true);
  });

  test('any => false', () => {
    expect(isEmpty.any('  ')).toBe(false);
    expect(isEmpty.any({x: 'x'})).toBe(false);
    expect(isEmpty.any([25])).toBe(false);
    expect(isEmpty.any(0)).toBe(false);
    expect(isEmpty.any(true)).toBe(false);
    expect(isEmpty.any(false)).toBe(false);
    expect(isEmpty.any(() => undefined)).toBe(false);
    expect(isEmpty.any(Symbol('my symbol'))).toBe(false);
    expect(isEmpty.any(new Date())).toBe(false);

    expect(isEmpty.any('test', 0, 1, ['test'])).toBe(false);
  });

  test('all => true', () => {
    expect(isEmpty.all(undefined)).toBe(true);
    expect(isEmpty.all(null)).toBe(true);
    expect(isEmpty.all('')).toBe(true);
    expect(isEmpty.all([])).toBe(true);
    expect(isEmpty.all({})).toBe(true);
    
    expect(isEmpty.all(undefined, null, '', [], {})).toBe(true);
  });

  test('all => false', () => {
    expect(isEmpty.all('  ')).toBe(false);
    expect(isEmpty.all({x: 'x'})).toBe(false);
    expect(isEmpty.all([25])).toBe(false);
    expect(isEmpty.all(0)).toBe(false);
    expect(isEmpty.all(true)).toBe(false);
    expect(isEmpty.all(false)).toBe(false);
    expect(isEmpty.all(() => undefined)).toBe(false);
    expect(isEmpty.all(Symbol('my symbol'))).toBe(false);
    expect(isEmpty.all(new Date())).toBe(false);

    expect(isEmpty.all('test', 0, 1, ['test'])).toBe(false);
  });
});