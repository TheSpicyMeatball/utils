/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { sortReduceSemver } = require('../../../dist/lib/es5/index');

describe('sortReduceSemver', () => {
  test('basic', () => {
    expect(sortReduceSemver('version')({ version: '1.2.3' })).toBe('100001.100002.100003');
    expect(sortReduceSemver('version')({ version: '^1.2.3' })).toBe('100001.100002.100003');
    expect(sortReduceSemver('version')({ version: '~1.2.3' })).toBe('100001.100002.100003');
    expect(sortReduceSemver('version')({ version: '>1.2.3' })).toBe('100001.100002.100003');
    expect(sortReduceSemver('version')({ version: '>=1.2.3' })).toBe('100001.100002.100003');
    expect(sortReduceSemver('version', 100)({ version: '1.2.3' })).toBe('101.102.103');
  });

  test('path', () => {
    expect(sortReduceSemver('package.version')({ package: { version: '1.2.3' } })).toBe('100001.100002.100003');
  });

  test('edge cases', () => {
    expect(sortReduceSemver('key doesn\'t exist')({})).toBe(null);
  });
});