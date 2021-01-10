/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { sortReduceString } = require('../../../dist/lib/es5');

describe('sortReduceString', () => {
  test('basic', () => {
    const obj = { name: 'Kermit the Frog' };
    expect(sortReduceString('name')(obj)).toBe('kermit the frog');
    expect(sortReduceString('name', true)(obj)).toBe('Kermit the Frog');
  });

  test('path', () => {
    const obj = { user: { name: 'Kermit the Frog' } };
    expect(sortReduceString('user.name')(obj)).toBe('kermit the frog');
    expect(sortReduceString('user.name', true)(obj)).toBe('Kermit the Frog');
  });

  test('edge cases', () => {
    const obj = { name: 'Kermit the Frog' };
    expect(sortReduceString('key doesn\'t exist')(obj)).toBe(null);
  });
});