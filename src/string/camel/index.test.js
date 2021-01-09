/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { camel } = require('../../../dist/lib/es5/index');

describe('camel', () => {
  test('basic', () => {
    expect(camel('Hello World')).toBe('helloWorld');
    expect(camel('-%^-hello-world--')).toBe('helloWorld');
    expect(camel('$@__HELLO+WORLD__')).toBe('helloWorld');
    expect(camel('2Hello 7world')).toBe('hello7World');
  });
  
  test('empty', () => {
    expect(camel(null)).toBe('');
    expect(camel([])).toBe('');
    expect(camel('25')).toBe('');
  });
  
  test('edge cases', () => {
    expect(camel('helloWorld')).toBe('helloWorld');
    expect(camel('hello+World')).toBe('helloWorld');
  });
});