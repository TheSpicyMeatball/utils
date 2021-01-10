/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { has } = require('../../../dist/lib/es5');

describe('has', () => {
  const obj = { a: { b: { c: 3 }, d: null } };
  test('true', () => {
    expect(has(obj, 'a.b.c')).toBe(true);
  });
  
  test('false', () => {
    expect(has(obj, 'a.b.d')).toBe(false);
    expect(has(obj, 'x.y.z')).toBe(false);
    expect(has({}, 'a.b.d')).toBe(false);
    expect(has(null, 'a.b.d')).toBe(false);
  });
});