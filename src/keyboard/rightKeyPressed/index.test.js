/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { rightKeyPressed } = require('../../../dist/lib/es5');

describe('rightKeyPressed', () => {
  const event = {
    right: { key: 'ArrowRight', code: 39 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(rightKeyPressed(event.right)).toBe(true);
    expect(rightKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(rightKeyPressed()).toBe(false);
    expect(rightKeyPressed(undefined)).toBe(false);
    expect(rightKeyPressed(null)).toBe(false);
    expect(rightKeyPressed({})).toBe(false);
  });
});