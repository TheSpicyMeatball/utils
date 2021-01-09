/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { symbols } = require('../../../dist/lib/es5/index');

describe('symbols', () => {
  test('value', () => {
    const sym = Symbol('my symbol');
    expect(symbols({ [sym]: 'value' })).toStrictEqual([sym]);
  });
  
  test('empty', () => {
    expect(symbols({})).toStrictEqual([]);
    expect(symbols([])).toStrictEqual([]);
    expect(symbols(null)).toStrictEqual([]);
    expect(symbols(undefined)).toStrictEqual([]);
    expect(symbols('')).toStrictEqual([]);
  });
});