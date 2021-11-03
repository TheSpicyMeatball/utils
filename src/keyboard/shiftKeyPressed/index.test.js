/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { shiftKeyPressed } = require('../../../dist/lib/es5');

describe('shiftKeyPressed', () => {
  const event = {
    shift: { key: 'Shift', code: 8 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(shiftKeyPressed(event.shift)).toBe(true);
    expect(shiftKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(shiftKeyPressed()).toBe(false);
    expect(shiftKeyPressed(undefined)).toBe(false);
    expect(shiftKeyPressed(null)).toBe(false);
    expect(shiftKeyPressed({})).toBe(false);
  });
});