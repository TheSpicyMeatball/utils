/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { leadingZero } = require('../../../dist/lib/es5');

describe('leadingZero', () => {
  test('Basic', () => {
    expect(leadingZero(7)).toBe('07');
    expect(leadingZero('7')).toBe('07');
    expect(leadingZero('07')).toBe('07');
    expect(leadingZero(10)).toBe('10');
    expect(leadingZero('10')).toBe('10');
  });

  test('Edge', () => {
    expect(leadingZero(undefined)).toBe('00');
    expect(leadingZero(null)).toBe('00');
    expect(leadingZero('')).toBe('00');
    expect(leadingZero(-1)).toBe('00');
    expect(leadingZero('-1')).toBe('00');
    expect(leadingZero([])).toBe('00');
  });
});