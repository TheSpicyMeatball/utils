/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { isNotNil } = require('../../../dist/lib/es5/index');

describe('isNotNil', () => {  
  test('true', () => {
    expect(isNotNil('')).toBe(true);
    expect(isNotNil([])).toBe(true);
    expect(isNotNil({})).toBe(true);
    expect(isNotNil(25)).toBe(true);
    expect(isNotNil(() => undefined)).toBe(true);
    expect(isNotNil(Symbol('my symbol'))).toBe(true);
  });
  
  test('false', () => {
    expect(isNotNil(undefined)).toBe(false);
    expect(isNotNil(null)).toBe(false);
  });
});