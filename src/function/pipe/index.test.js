/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pipe } = require('../../../dist/lib/es5');

describe('pipe', () => {
  const addOne = x => x + 1;
  const addSeven = x => x + 7;
  const timesNegativeOne = x => x * -1;

  test('basic', () => {
    expect(pipe(addOne, addSeven, timesNegativeOne)(25)).toBe(-33);
    expect(pipe(addOne, addSeven, timesNegativeOne, Math.abs)(25)).toBe(33);
  });

  test('edge', () => {
    const addOne = (x = 0) => x + 1;
    expect(pipe(addOne, addSeven, timesNegativeOne)()).toBe(-8);
  });

  test('empty', () => {
    expect(pipe()(25)).toBe(25);
  });
});