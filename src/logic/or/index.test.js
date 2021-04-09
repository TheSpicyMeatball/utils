/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { or } = require('../../../dist/lib/es5');

describe('or', () => {
  test('basic', () => {
    expect(or('item', 25, 7, 'item')).toBe(true);
    expect(or('item', 25, 7)).toBe(false);
  });
  
  test('empty', () => {
    expect(or('item')).toBe(false);
  });
});