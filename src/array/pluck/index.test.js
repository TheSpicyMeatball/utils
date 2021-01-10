/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pluck } = require('../../../dist/lib/es5');

describe('pluck', () => {
  const array = ['a', 'b', 'c'];

  test('basic', () => {
    expect(pluck(array, [0, 2])).toStrictEqual(['a', 'c']);
    expect(pluck(array, [0, 2, 17])).toStrictEqual(['a', 'c', undefined]);
  });

  test('empty', () => {
    expect(pluck(array, [])).toStrictEqual([]);
  });
  
  test('fill', () => {
    expect(pluck([], [0, 2])).toStrictEqual([undefined, undefined]);
    expect(pluck(null, [0, 2])).toStrictEqual([undefined, undefined]);
    expect(pluck(undefined, [0, 2])).toStrictEqual([undefined, undefined]);
  });
});