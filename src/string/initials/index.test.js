/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { initials } = require('../../../dist/lib/es5');

describe('string', () => {
  // True
  test('initials(\'Bruce\', \'Wayne\')', () => {
    expect(initials('Bruce', 'Wayne')).toBe('BW');
  });

  test('initials(\'clark\', \'kent\', \'superman\')', () => {
    expect(initials('clark', 'kent', 'superman')).toBe('SK');
  });

  test('No last name', () => {
    expect(initials('clark')).toBe('C');
  });
});