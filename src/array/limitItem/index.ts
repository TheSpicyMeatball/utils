import { count } from '../count/index';
import { isArray } from '../../type/isArray';

/**
 * Immutably inserts an item into the array if the occurrence of the item in the array has not reached the specified limit 
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} limit - The maximum number of times the item can occur in the array
 * @param {T} item - The item to insert
 * @param {(item1: T, item2: T) => boolean} [equalityComparer] - Optional means of determining if two items are equal or not; if omitted, a shallow comparison will be made
 * @returns {T[]}
 * @example
 * limitItem([0, 1, 2], 10, 2)     //=> [0, 1, 2, 2]
 * limitItem([0, 1, 2], 1, 2)     //=> [0, 1, 2]
 * 
 * // equalityComparer
 * const array = [{ id: 1, name: 'user' }, { id: 2, name: 'user' }];
 * const equalityComparer = (item1: T, item2: T) => item1.id === item2.id;
 * 
 * limitItem(array, 1, { id: 1, name: 'user' }, equalityComparer)
 * // => [{ id: 1, name: 'user' }, { id: 2, name: 'user' }]
 */
export const limitItem = <T = unknown>(array: T[], limit: number, item: T, equalityComparer?: (item1: T, item2: T) => boolean) : T[] => {
  if (limit <= 0) return isArray(array) ? array : [];
  if (!isArray(array)) return [item];

  const currentCount = count(array, x => equalityComparer ? equalityComparer(x, item) : x === item);

  return currentCount >= limit ? array : [...array, item];
};