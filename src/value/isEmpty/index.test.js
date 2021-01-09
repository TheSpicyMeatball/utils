/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isEmpty } = require('../../../dist/lib/es5/index');

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
});