/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { enterKeyPressed } = require('../../../dist/lib/es5');

describe('enterKeyPressed', () => {
  const event = {
    enter: { key: 'Enter', code: 13 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(enterKeyPressed(event.enter)).toBe(true);
    expect(enterKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(enterKeyPressed()).toBe(false);
    expect(enterKeyPressed(undefined)).toBe(false);
    expect(enterKeyPressed(null)).toBe(false);
    expect(enterKeyPressed({})).toBe(false);
  });
});