/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { keyPressed } = require('../../../dist/lib/es5');

describe('keyPressed', () => {
  const event = {
    enter: { key: 'Enter', code: 13 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(keyPressed(event.enter, 'Enter')).toBe(true);
    expect(keyPressed(event.enter, 'Enter', 'Tab')).toBe(true);
    expect(keyPressed(event.tab, 'Enter', 'Tab')).toBe(true);
    expect(keyPressed(event.enter, 'Tab')).toBe(false);
    expect(keyPressed(event.enter, 'a')).toBe(false);
  });
  
  test('empty', () => {
    expect(keyPressed(undefined)).toBe(false);
    expect(keyPressed(event.enter)).toBe(false);
    expect(keyPressed(event.enter, undefined)).toBe(false);
    expect(keyPressed(event.enter, null)).toBe(false);
  });
});