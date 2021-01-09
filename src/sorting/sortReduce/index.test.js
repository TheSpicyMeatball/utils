/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { sortReduce } = require('../../../dist/lib/es5/index');

describe('sortReduce', () => {
  test('basic', () => {
    expect(sortReduce('count')({ count: 25 })).toStrictEqual(25);
  });

  test('empty', () => {
    expect(sortReduce('count')({})).toStrictEqual(null);
    expect(sortReduce('count')(null)).toStrictEqual(null);
    expect(sortReduce('count')(undefined)).toStrictEqual(null);
  });
});