/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { count } = require('../../../dist/lib/es5/index');

describe('count', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(count(array, item => item >= 25)).toBe(2);
    expect(count(array, item => item === 'test')).toBe(0);
  });

  test('empty', () => {
    expect(count(null, item => item >= 25)).toStrictEqual(0);
    expect(count(undefined, item => item >= 25)).toStrictEqual(0);
    expect(count(array, undefined)).toStrictEqual(0);
  });
});