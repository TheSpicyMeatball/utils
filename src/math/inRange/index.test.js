/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { inRange } = require('../../../dist/lib/es5/index');

describe('inRange', () => {
  test('basic', () => {
    expect(inRange(0, 9)(7)).toBe(true);
    expect(inRange(0, 9)(27)).toBe(false);
    expect(inRange(0.44, 1)(0.5)).toBe(true);
    expect(inRange(-100, 50)(0)).toBe(true);
  });

  test('boundary', () => {
    expect(inRange(0, 50)(0)).toBe(true);
    expect(inRange(0, 50)(50)).toBe(false);
    expect(inRange({ bound: 0, inclusive: false }, { bound: 0, inclusive: true })(0)).toBe(false);
    expect(inRange({ bound: 0, inclusive: false }, { bound: 50, inclusive: true })(50)).toBe(true);
  });
  
  test('empty', () => {
    expect(inRange(0, 50)(null)).toBe(false);
  });

  test('bad range values', () => {
    expect(inRange(50, 0)(25)).toBe(false);
  });
});