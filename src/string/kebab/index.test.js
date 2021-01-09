/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { kebab } = require('../../../dist/lib/es5/index');

describe('kebab', () => {
  test('basic', () => {
    expect(kebab('Hello World')).toBe('hello-world');
    expect(kebab('-%^-hello-world--')).toBe('hello-world');
    expect(kebab('-%^-hello--world--')).toBe('hello-world');
    expect(kebab('$@__HELLO+WORLD__')).toBe('hello-world');
    expect(kebab('2Hello 7world')).toBe('hello-7-world');
    expect(kebab('2Hello 7wo25rld')).toBe('hello-7-wo-25-rld');
  });
  
  test('empty', () => {
    expect(kebab(null)).toBe('');
    expect(kebab([])).toBe('');
    expect(kebab(25)).toBe('');
  });
  
  test('edge cases', () => {
    expect(kebab('hello-world')).toBe('hello-world');
    expect(kebab('hello+world')).toBe('hello-world');
  });
});