/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { limitItem } = require('../../../dist/lib/es5/index');

describe('limitItem', () => {
  test('basic', () => {
    expect(limitItem([0, 1, 2], 10, 2)).toStrictEqual([0, 1, 2, 2]);
    expect(limitItem([0, 1, 2], 1, 2)).toStrictEqual([0, 1, 2]);
  });

  test('equalityComparer', () => {
    const array = [{ id: 1, name: 'user' }, { id: 2, name: 'user' }];
    const equalityComparer = (item1, item2) => item1.id === item2.id;

    expect(limitItem(array, 2, { id: 1, name: 'user' }, equalityComparer)).toStrictEqual([{ id: 1, name: 'user' }, { id: 2, name: 'user' }, { id: 1, name: 'user' }]);
    expect(limitItem(array, 1, { id: 1, name: 'user' }, equalityComparer)).toStrictEqual([{ id: 1, name: 'user' }, { id: 2, name: 'user' }]);
  });

  test('edge cases', () => {
    expect(limitItem([0, 1, 2], -10, 3)).toStrictEqual([0, 1, 2]);
    expect(limitItem(null, -10, 3)).toStrictEqual([]);
    expect(limitItem(25, 10, 3)).toStrictEqual([3]);
  });
});