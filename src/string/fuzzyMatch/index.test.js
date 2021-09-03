/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { fuzzyMatch } = require('../../../dist/lib/es5');

describe('string', () => {
  test('fuzzyMatch(\'Superman\', \'sman\')', () => {
    expect(fuzzyMatch('Superman', 'sman')).toBe(true);
  });
  
  test('fuzzyMatch(\'Spiderman\', \'sman\')', () => {
    expect(fuzzyMatch('Spiderman', 'sman')).toBe(true);
  });

  test('fuzzyMatch(\'Batman\', \'sman\')', () => {
    expect(fuzzyMatch('Batman', 'sman')).toBe(false);
  });

  test('fuzzyMatch(undefined, \'sman\')', () => {
    expect(fuzzyMatch(undefined, 'sman')).toBe(false);
  });
  
  test('fuzzyMatch(null, \'sman\')', () => {
    expect(fuzzyMatch(null, 'sman')).toBe(false);
  });

  test('fuzzyMatch(\'\', \'sman\')', () => {
    expect(fuzzyMatch('', 'sman')).toBe(false);
  });

  test('fuzzyMatch(\'Superman\', undefined)', () => {
    expect(fuzzyMatch('Superman', undefined)).toBe(true);
  });

  test('fuzzyMatch(\'Superman\', null)', () => {
    expect(fuzzyMatch('Superman', null)).toBe(true);
  });

  test('fuzzyMatch(\'Superman\', \'\')', () => {
    expect(fuzzyMatch('Superman', '')).toBe(true);
  });
});