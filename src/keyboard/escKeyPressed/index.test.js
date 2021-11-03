/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { escKeyPressed } = require('../../../dist/lib/es5');

describe('escKeyPressed', () => {
  const event = {
    escape: { key: 'Escape', code: 27 },
    esc: { key: 'Esc', code: 27 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(escKeyPressed(event.escape)).toBe(true);
    expect(escKeyPressed(event.esc)).toBe(true);
    expect(escKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(escKeyPressed()).toBe(false);
    expect(escKeyPressed(undefined)).toBe(false);
    expect(escKeyPressed(null)).toBe(false);
    expect(escKeyPressed({})).toBe(false);
  });
});