/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pad } = require('../../../dist/lib/es5/index');

describe('pad', () => {
  test('basic', () => {
    expect(pad([1, 2, 3], 2)).toStrictEqual([1, 2, 3, undefined, undefined]);
    expect(pad([1, 2, 3], -2)).toStrictEqual([undefined, undefined, 1, 2, 3]);
    expect(pad([1, 2, 3], 1, 4)).toStrictEqual([1, 2, 3, 4]);
    expect(pad([1, 2, 3], -1, 0)).toStrictEqual([0, 1, 2, 3]);
  });
  
  test('edge cases', () => {
    expect(pad([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
    expect(pad([], 2)).toStrictEqual([undefined, undefined]);
    expect(pad(null, 2, 'dog')).toStrictEqual(['dog', 'dog']);
    expect(pad(25, 2)).toStrictEqual([undefined, undefined]);
    expect(pad([])).toStrictEqual([]);
  });
});