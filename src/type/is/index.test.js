/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { is } = require('../../../dist/lib/es5/index');

describe('isNil', () => {
  test('true', () => {
    expect(is('Hello world', 'string')).toBe(true);
    expect(is({}, 'object')).toBe(true);
    expect(is(null, 'object')).toBe(true);
    expect(is(undefined, 'undefined')).toBe(true);
  });
  
  test('false', () => {
    expect(is(25, 'symbol')).toBe(false);
  });
});