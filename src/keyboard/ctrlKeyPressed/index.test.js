/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ctrlKeyPressed } = require('../../../dist/lib/es5');

describe('ctrlKeyPressed', () => {
  const event = {
    ctrl: { key: 'Ctrl', code: 17 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(ctrlKeyPressed(event.ctrl)).toBe(true);
    expect(ctrlKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(ctrlKeyPressed()).toBe(false);
    expect(ctrlKeyPressed(undefined)).toBe(false);
    expect(ctrlKeyPressed(null)).toBe(false);
    expect(ctrlKeyPressed({})).toBe(false);
  });
});