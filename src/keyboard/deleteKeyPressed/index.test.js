/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { deleteKeyPressed } = require('../../../dist/lib/es5');

describe('deleteKeyPressed', () => {
  const event = {
    delete: { key: 'Delete', code: 46 },
    tab: { key: 'Tab', code: 9 },
  };

  test('basic', () => {
    expect(deleteKeyPressed(event.delete)).toBe(true);
    expect(deleteKeyPressed(event.tab)).toBe(false);
  });
  
  test('empty', () => {
    expect(deleteKeyPressed()).toBe(false);
    expect(deleteKeyPressed(undefined)).toBe(false);
    expect(deleteKeyPressed(null)).toBe(false);
    expect(deleteKeyPressed({})).toBe(false);
  });
});