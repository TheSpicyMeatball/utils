/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defaultEmptyTo } = require('../../../dist/lib/es5');

describe('defaultEmptyTo', () => {
  test('original value', () => {
    expect(defaultEmptyTo('test', 'default')).toBe('test');
    expect(defaultEmptyTo(['value'], 'default')).toStrictEqual(['value']);
    expect(defaultEmptyTo({ key: 'value' }, 'default')).toStrictEqual({ key: 'value' });
  });
  
  test('default value', () => {
    expect(defaultEmptyTo(undefined, 'default')).toBe('default');
    expect(defaultEmptyTo(null, 'default')).toBe('default');
    expect(defaultEmptyTo('', 'default')).toBe('default');
    expect(defaultEmptyTo([], 'default')).toBe('default');
    expect(defaultEmptyTo({}, 'default')).toBe('default');
  });
});