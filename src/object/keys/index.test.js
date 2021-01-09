/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { keys } = require('../../../dist/lib/es5/index');

describe('keys', () => {
  test('value', () => {
    expect(keys({ x: 'x' })).toStrictEqual(['x']);
    expect(keys([])).toStrictEqual(['length']);
  });
  
  test('empty', () => {
    expect(keys({})).toStrictEqual([]);
    expect(keys(null)).toStrictEqual([]);
    expect(keys(undefined)).toStrictEqual([]);
    expect(keys('')).toStrictEqual([]);
  });
});