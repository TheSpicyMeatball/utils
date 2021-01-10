/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { removeKeys } = require('../../../dist/lib/es5');

describe('assign', () => {
  const obj = { hello: 'world', hi: 'earth', hey: 'planet' };

  test('basic', () => {
    expect(removeKeys(obj, ['hi', 'hey'])).toStrictEqual({ hello: 'world' });
  });

  test('no keys', () => {
    expect(removeKeys(obj, [])).toStrictEqual(obj);
  });

  test('nothing', () => {
    expect(removeKeys(null, ['hi', 'hey'])).toStrictEqual(null);
    expect(removeKeys(undefined, ['hi', 'hey'])).toStrictEqual(undefined);
    expect(removeKeys({}, ['hi', 'hey'])).toStrictEqual({});
  });

  test('bad data', () => {
    expect(removeKeys(25, ['hi', 'hey'])).toStrictEqual(25);
    expect(removeKeys([25], ['hi', 'hey'])).toStrictEqual([25]);
    expect(removeKeys(true, ['hi', 'hey'])).toStrictEqual(true);
  });
});