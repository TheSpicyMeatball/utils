/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { type } = require('../../../dist/lib/es5');

describe('type', () => {
  test('nothing', () => {
    expect(type(undefined)).toBe('undefined');
    expect(type(null)).toBe('object');
  });

  test('object', () => {
    expect(type({})).toBe('object');
  });

  test('array', () => {
    expect(type([])).toBe('array');
  });

  test('date', () => {
    expect(type(new Date())).toBe('date');
  });

  test('string', () => {
    expect(type('')).toBe('string');
    expect(type('  ')).toBe('string');
    expect(type('Hello world')).toBe('string');
  });

  test('number', () => {
    expect(type(25)).toBe('number');
  });

  test('boolean', () => {
    expect(type(true)).toBe('boolean');
    expect(type(false)).toBe('boolean');
  });

  test('function', () => {
    expect(type(() => undefined)).toBe('function');
  });

  test('symbol', () => {
    expect(type(Symbol('Hello symbol world'))).toBe('symbol');
  });
});