/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { findLastIndex } = require('../../../dist/lib/es5/index');

describe('findLastIndex', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(findLastIndex(array, item => item >= 25)).toStrictEqual(4);
    expect(findLastIndex(array, item => item === 'test')).toStrictEqual(-1);
  });
});