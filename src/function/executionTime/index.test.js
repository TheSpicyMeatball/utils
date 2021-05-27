/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { calcPerformance, executionTime } = require('../../../dist/lib/es5');

describe('calcPerformance', () => {
  const addOne = x => x + 1;

  performance.now = jest.fn().mockReturnValue(1);

  test('basic', () => {
    expect(calcPerformance(performance)(addOne, 25)).toBe(0);
    expect(calcPerformance(performance, 10)(addOne, 25)).toBe(0);
  });

  test('edge', () => {
    expect(calcPerformance(performance, -1)(addOne, 25)).toBe(0);
  });
});

describe('executionTime', () => {
  const addOne = x => x + 1;

  performance.now = jest.fn().mockReturnValue(1);

  test('basic', () => {
    expect(executionTime(performance)(addOne, 25)).toBe(0);
    expect(executionTime(performance, 10)(addOne, 25)).toBe(0);
  });

  test('edge', () => {
    expect(executionTime(performance, -1)(addOne, 25)).toBe(0);
  });
});