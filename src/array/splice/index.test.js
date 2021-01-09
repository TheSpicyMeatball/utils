/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { splice } = require('../../../dist/lib/es5/index');

describe('splice', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(splice(array, 1, 1, 99, 98)).toStrictEqual([7, 99, 98, 21, 17, 42]);
    expect(splice(null, 1, 1, 99, 98)).toStrictEqual([99, 98]);
    expect(splice(array, 1, 1)).toStrictEqual([7, 21, 17, 42]);
  });
});