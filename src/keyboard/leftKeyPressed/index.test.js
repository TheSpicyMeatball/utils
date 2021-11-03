/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { leftKeyPressed } = require('../../../dist/lib/es5');

describe('leftKeyPressed', () => {
  const event = {
    left: { key: 'ArrowLeft', code: 37 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(leftKeyPressed(event.left)).toBe(true);
    expect(leftKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(leftKeyPressed()).toBe(false);
    expect(leftKeyPressed(undefined)).toBe(false);
    expect(leftKeyPressed(null)).toBe(false);
    expect(leftKeyPressed({})).toBe(false);
  });
});