/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { assign } = require('../../../dist/lib/es5');

describe('assign', () => {
  test('basic', () => {
    expect(assign({ x: 'x' }, { x: 'assign' })).toStrictEqual({ x: 'assign' });
  });

  test('key doesn\'t exist', () => {
    expect(assign({ x: 'x' }, { y: 'assign' })).toStrictEqual({ x: 'x', y: 'assign' });
  });
  
  test('default', () => {
    expect(assign({ x: 'assign' }, 25)).toStrictEqual({ x: 'assign' });
    expect(assign(25, 25)).toStrictEqual({});
    expect(assign({}, { x: 'assign' })).toStrictEqual({ x: 'assign' });
    expect(assign(null, { x: 'assign' })).toStrictEqual({ x: 'assign' });
    expect(assign(undefined, { x: 'assign' })).toStrictEqual({ x: 'assign' });
    expect(assign([], { x: 'assign' })).toStrictEqual({ x: 'assign' });
    expect(assign(25, { x: 'assign' })).toStrictEqual({ x: 'assign' });
  });
});