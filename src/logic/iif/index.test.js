/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { iif } = require('../../../dist/lib/es5/index');

describe('iif', () => {
  test('basic', () => {
    expect(iif(true, 25, 7)).toBe(25);
    expect(iif(false, 25, 7)).toBe(7);
  });
});