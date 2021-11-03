/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { altKeyPressed } = require('../../../dist/lib/es5');

describe('altKeyPressed', () => {
  const event = {
    alt: { key: 'Alt', code: 18 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(altKeyPressed(event.alt)).toBe(true);
    expect(altKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(altKeyPressed()).toBe(false);
    expect(altKeyPressed(undefined)).toBe(false);
    expect(altKeyPressed(null)).toBe(false);
    expect(altKeyPressed({})).toBe(false);
  });
});