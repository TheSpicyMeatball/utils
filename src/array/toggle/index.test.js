/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { toggle } = require('../../../dist/lib/es5');

describe('toggle', () => {
  const array = [1, 2, 3];

  test('basic', () => {
    expect(toggle(array, 2)).toStrictEqual([1, 3]);
    expect(toggle(array, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  test('reducer', () => {
    const array = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
    ];

    const reducer = x => x.id;
    const item = { id: 3, value: 'c' };

    expect(toggle(array, array[0], reducer)).toStrictEqual([array[1]]);
    expect(toggle(array, item, reducer)).toStrictEqual([...array, item]);
  });

  test('empty', () => {
    expect(toggle([], 2)).toStrictEqual([2]);
    expect(toggle(null, 2)).toStrictEqual([2]);
    expect(toggle(undefined, 2)).toStrictEqual([2]);

    const reducer = x => x.id;
    const item = { id: 3, value: 'c' };

    expect(toggle([], item, reducer)).toStrictEqual([item]);
    expect(toggle(null, item, reducer)).toStrictEqual([item]);
    expect(toggle(undefined, item, reducer)).toStrictEqual([item]);
  });
});