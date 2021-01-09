/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { round } = require('../../../dist/lib/es5/index');

describe('round', () => {
  test('basic', () => {
    expect(round(0.4, 0)).toBe(0);
    expect(round(0.5, 0)).toBe(1);
    expect(round(0.44, 1)).toBe(0.4);
    expect(round(0.44, -1)).toBe(0.4);
    expect(round(0.45, 1)).toBe(0.5);
    expect(round(0.411, 2)).toBe(0.41);
    expect(round(0.499, 2)).toBe(0.5);
    expect(round(0.999, 2)).toBe(1);
  });
});