/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { splitCamelCase } = require('../../../dist/lib/es5/index');

describe('splitCamelCase', () => {
  test('basic', () => {
    expect(splitCamelCase('TheQuickBrownFox')).toBe('The Quick Brown Fox');
    expect(splitCamelCase('theQuickBrownFox')).toBe('The Quick Brown Fox');
  });
  
  test('empty', () => {
    expect(splitCamelCase(null)).toBe('');
    expect(splitCamelCase([])).toBe('');
  });
});