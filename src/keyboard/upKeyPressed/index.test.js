/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { upKeyPressed } = require('../../../dist/lib/es5');

describe('upKeyPressed', () => {
  const event = {
    up: { key: 'ArrowUp', code: 38 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(upKeyPressed(event.up)).toBe(true);
    expect(upKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(upKeyPressed()).toBe(false);
    expect(upKeyPressed(undefined)).toBe(false);
    expect(upKeyPressed(null)).toBe(false);
    expect(upKeyPressed({})).toBe(false);
  });
});