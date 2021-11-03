/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { downKeyPressed } = require('../../../dist/lib/es5');

describe('downKeyPressed', () => {
  const event = {
    down: { key: 'ArrowDown', code: 40 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(downKeyPressed(event.down)).toBe(true);
    expect(downKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(downKeyPressed()).toBe(false);
    expect(downKeyPressed(undefined)).toBe(false);
    expect(downKeyPressed(null)).toBe(false);
    expect(downKeyPressed({})).toBe(false);
  });
});