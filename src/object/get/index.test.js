/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { get } = require('../../../dist/lib/es5');

describe('get', () => {
  const obj = { a: { b: { c: 3 }, d: null } };
  test('basic', () => {
    expect(get(obj, 'a.b.c', 'default')).toBe(3);
  });
  
  test('default', () => {
    expect(get(obj, 'a.b.d', 'default')).toBe('default');
    expect(get(obj, 'x.y.z', 'default')).toBe('default');
    expect(get({}, 'a.b.d', 'default')).toBe('default');
    expect(get(null, 'a.b.d', 'default')).toBe('default');
  });
});