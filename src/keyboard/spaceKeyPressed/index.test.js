/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { spaceKeyPressed } = require('../../../dist/lib/es5');

describe('spaceKeyPressed', () => {
  const event = {
    space: { key: 'Space', code: 38 },
    white: { key: ' ', code: 38 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(spaceKeyPressed(event.space)).toBe(true);
    expect(spaceKeyPressed(event.white)).toBe(true);
    expect(spaceKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(spaceKeyPressed()).toBe(false);
    expect(spaceKeyPressed(undefined)).toBe(false);
    expect(spaceKeyPressed(null)).toBe(false);
    expect(spaceKeyPressed({})).toBe(false);
  });
});