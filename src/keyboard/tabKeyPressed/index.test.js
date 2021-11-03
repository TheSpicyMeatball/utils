/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { tabKeyPressed } = require('../../../dist/lib/es5');

describe('tabKeyPressed', () => {
  const event = {
    enter: { key: 'Enter', code: 13 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(tabKeyPressed(event.tab)).toBe(true);
    expect(tabKeyPressed(event.enter)).toBe(false);
  });
  
  test('empty', () => {
    expect(tabKeyPressed()).toBe(false);
    expect(tabKeyPressed(undefined)).toBe(false);
    expect(tabKeyPressed(null)).toBe(false);
    expect(tabKeyPressed({})).toBe(false);
  });
});