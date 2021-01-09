/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { insertAt } = require('../../../dist/lib/es5/index');

describe('insertAt', () => {
  const array = [7, 25, 21, 17, 42];

  test('basic', () => {
    expect(insertAt(array, 1, [99])).toStrictEqual([7, 99, 25, 21, 17, 42]);
    expect(insertAt(array, 1, [99, 98])).toStrictEqual([7, 99, 98, 25, 21, 17, 42]);
    expect(insertAt(array, 1, [])).toStrictEqual(array);
    expect(insertAt(null, 1, [99, 98])).toStrictEqual([undefined, 99, 98]);
  });
  
  test('negative', () => {
    expect(insertAt(array, -1, [99])).toStrictEqual([7, 25, 21, 17, 42, 99]);
    expect(insertAt(array, -2, [99, 98])).toStrictEqual([7, 25, 21, 17, 99, 98, 42]);
    expect(insertAt(array, -10, [99])).toStrictEqual([99, undefined, undefined, undefined, undefined, 7, 25, 21, 17, 42]);
    expect(insertAt(array, -6, [99])).toStrictEqual([99, 7, 25, 21, 17, 42]);
  });
  
  test('not array', () => {
    expect(insertAt(12, 1, [])).toStrictEqual([]);
  });
});