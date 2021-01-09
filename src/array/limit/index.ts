import { isArray } from '../../type/isArray';

/**
 * Immutably inserts an item into the array if the size of the array has not reached the specified limit 
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} limit - The size limit of the array
 * @param {T} item - The item to insert
 * @returns {T[]}
 * @example
 * limit([0, 1, 2], 10, 3)  //=> [0, 1, 2, 3]
 * limit([0, 1, 2], 3, 3)   //=> [0, 1, 2]
 */
export const limit = <T = unknown>(array: T[], limit: number, item: T) : T[] => {
  if (limit <= 0) return isArray(array) ? array : [];
  if (!isArray(array)) return [item];

  return array.length >= limit ? array : [...array, item];
};