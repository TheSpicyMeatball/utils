/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { insertKeyPressed } = require('../../../dist/lib/es5');

describe('insertKeyPressed', () => {
  const event = {
    insert: { key: 'Insert', code: 45 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(insertKeyPressed(event.insert)).toBe(true);
    expect(insertKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(insertKeyPressed()).toBe(false);
    expect(insertKeyPressed(undefined)).toBe(false);
    expect(insertKeyPressed(null)).toBe(false);
    expect(insertKeyPressed({})).toBe(false);
  });
});