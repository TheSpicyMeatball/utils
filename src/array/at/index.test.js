/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { at } = require('../../../dist/lib/es5');

describe('at', () => {
  test('basic', () => {
    expect(at([0, 1, 2], 0, 'default')).toBe(0);
    expect(at([0, 1, 2], 1, 'default')).toBe(1);
  });

  test('indexed from the end', () => {
    expect(at([0, 1, 2], -1, 'default')).toBe(2);
  });
  
  test('default', () => {
    expect(at([0, 1, 2], 25, 'default')).toBe('default');
    expect(at([0, 1, 2], -25, 'default')).toBe('default');
    expect(at(null, 25, 'default')).toBe('default');
    expect(at(undefined, 25, 'default')).toBe('default');
    expect(at(true, 25, 'default')).toBe('default');
  });
});