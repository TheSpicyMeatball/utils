/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyFunction } from '../../types';

/**
 * Calculates the execution time of a function in milliseconds
 * 
 * @since v1.7.0
 * @category Function
 * @param {{ now: () => number }} performance - The performance object; <blockquote>For use in the browser, simply pass in <code>performance</code> which is a native object; for use in NodeJS, use <code>import { performance } from 'perf_hooks';</code></blockquote>
 * @param {number} [n=1] - The number of times to execute the function; if greater than 1, the average time is returned
 * @returns {(func: AnyFunction, ...args: any[]) => number}
 * @example
 * const addOne = x => x + 1;
 * calcPerformance(performance)(addOne, 25);
 * 
 * // exec 'addOne' 100 times and return the average
 * calcPerformance(performance, 100)(addOne, 25);
 * @docgen_types
 * type AnyFunction<TArgs = unknown, TReturn = unknown> = (args?: TArgs) => TReturn;
 * @docgen_import { calcPerformance, AnyFunction }
 * @docgen_import_note
 * <code>AnyFunction</code> is a TypeScript type that can be imported only in TypeScript projects.
 */
export const calcPerformance = (performance: { now: () => number }, n = 1) => (func: AnyFunction, ...args: any[]) : number => {
  const measure = () => {
    const t0 = performance.now();
    func(...args);
    const t1 = performance.now();
    const ms = t1 - t0;
    
    return ms;
  };

  if (n <= 1) return measure();

  let total = 0;

  for (let index = 0; index < n; index++) {
    total = total + measure();    
  }

  return total / n;
};