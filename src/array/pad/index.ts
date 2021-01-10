import { isArray } from '../../type/isArray';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';
import { fill } from '../fill';

/**
 * Immutably pads the array with {size} number of {item}
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} size - The size of the pad; if greater than zero, the padding will go to the end of the array; if less than zero, the padding will go to the front
 * @param {T} [item] - The item to put in each index of the array
 * @returns {T[]}
 * @example
 * pad([1, 2, 3], 2) //=> [1, 2, 3, undefined, undefined]
 * pad([1, 2, 3], -2) //=> [undefined, undefined, 1, 2, 3]
 * pad([1, 2, 3], 1, 4) //=> [1, 2, 3, 4]
 * pad([1, 2, 3], -1, 0) //=> [0, 1, 2, 3]
 */
export const pad = <T = unknown>(array: T[], size: number, item?: T): T[] => {
  if (size === 0) return array;

  if (isNilOrEmpty(array) || !isArray(array)) return fill<T>(size, item);

  if (size < 0) return fill<T>(Math.abs(size), item).concat(array);
  
  return array.concat(fill<T>(size, item));
};