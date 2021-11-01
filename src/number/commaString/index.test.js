/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { commaString } = require('../../../dist/lib/es5');

describe('commaString', () => {
  test('basic', () => {
    expect(commaString(1)).toBe('1');
    expect(commaString(10)).toBe('10');
    expect(commaString(100)).toBe('100');
    expect(commaString(1000)).toBe('1,000');
    expect(commaString(10000)).toBe('10,000');
    expect(commaString(100000)).toBe('100,000');
    expect(commaString(1000000)).toBe('1,000,000');
    expect(commaString(1234567)).toBe('1,234,567');
  });

  test('negative', () => {
    expect(commaString(-1)).toBe('-1');
    expect(commaString(-10)).toBe('-10');
    expect(commaString(-100)).toBe('-100');
    expect(commaString(-1000)).toBe('-1,000');
    expect(commaString(-10000)).toBe('-10,000');
    expect(commaString(-100000)).toBe('-100,000');
    expect(commaString(-1000000)).toBe('-1,000,000');
    expect(commaString(-1234567)).toBe('-1,234,567');
  });

  test('decimal', () => {
    expect(commaString(0.1234567)).toBe('0.1234567');
    expect(commaString(1.1234567)).toBe('1.1234567');
    expect(commaString(10.1234567)).toBe('10.1234567');
    expect(commaString(100.1234567)).toBe('100.1234567');
    expect(commaString(1000.1234567)).toBe('1,000.1234567');
    expect(commaString(10000.1234567)).toBe('10,000.1234567');
    expect(commaString(100000.1234567)).toBe('100,000.1234567');
    expect(commaString(1000000.1234567)).toBe('1,000,000.1234567');
    expect(commaString(1234567.1234567)).toBe('1,234,567.1234567');
  });

  test('negative', () => {
    expect(commaString(-1.1234567)).toBe('-1.1234567');
    expect(commaString(-10.1234567)).toBe('-10.1234567');
    expect(commaString(-100.1234567)).toBe('-100.1234567');
    expect(commaString(-1000.1234567)).toBe('-1,000.1234567');
    expect(commaString(-10000.1234567)).toBe('-10,000.1234567');
    expect(commaString(-100000.1234567)).toBe('-100,000.1234567');
    expect(commaString(-1000000.1234567)).toBe('-1,000,000.1234567');
    expect(commaString(-1234567.1234567)).toBe('-1,234,567.1234567');
  });
  
  test('error', () => {
    expect(() => commaString(undefined)).toThrow(Error);
    expect(() => commaString(null)).toThrow(Error);
    expect(() => commaString('not a number')).toThrow(Error);
    expect(() => commaString([])).toThrow(Error);
    expect(() => commaString({})).toThrow(Error);
    expect(() => commaString('10000')).toThrow(Error);
  });
});