/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { sortKeys } = require('../../../dist/lib/es5');

/**
 * const obj = { hamster: true, frog: false, cow: false };
 * sortKeys(obj) //=> { cow: false, frog: false, hamster: true }
 */

describe('sortKeys', () => {
  const obj = { cow: false, frog: false, hamster: true };
  test('basic', () => {
    expect(sortKeys(obj)).toStrictEqual({ cow: false, frog: false, hamster: true });
  });

  test('nothing', () => {
    expect(sortKeys(null)).toStrictEqual(null);
    expect(sortKeys(undefined)).toStrictEqual(undefined);
    expect(sortKeys({})).toStrictEqual({});
  });

  test('bad data', () => {
    expect(sortKeys(25)).toStrictEqual(25);
    expect(sortKeys([25])).toStrictEqual([25]);
    expect(sortKeys(true)).toStrictEqual(true);
  });
});