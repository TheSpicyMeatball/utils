/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { backspaceKeyPressed } = require('../../../dist/lib/es5');

describe('backspaceKeyPressed', () => {
  const event = {
    backspace: { key: 'Backspace', code: 8 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(backspaceKeyPressed(event.backspace)).toBe(true);
    expect(backspaceKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(backspaceKeyPressed()).toBe(false);
    expect(backspaceKeyPressed(undefined)).toBe(false);
    expect(backspaceKeyPressed(null)).toBe(false);
    expect(backspaceKeyPressed({})).toBe(false);
  });
});