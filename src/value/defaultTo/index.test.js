/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defaultTo } = require('../../../dist/lib/es5');

describe('defaultTo', () => {
  test('original value', () => {
    expect(defaultTo('test', 'default')).toBe('test');
    expect(defaultTo('', 'default')).toBe('');
  });
  
  test('default value', () => {
    expect(defaultTo(undefined, 'default')).toBe('default');
    expect(defaultTo(null, 'default')).toBe('default');
  });
});