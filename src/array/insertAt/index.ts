import { fill } from './../fill/index';
import { splice } from '../splice';
import { isNilOrEmpty } from './../../value/isNilOrEmpty/index';
import { isArray } from '../../type/isArray';

/**
 * Immutably inserts the item(s) at the specified index
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} index - The index of the array to start the insert; use negative value to index from the end of the array
 * @param {T[]} items - The item(s) to insert
 * @returns {T[]}
 * @example
 * insert([0, 1, 2], 1, [25])     //=> [0, 25, 1, 2]
 * insert([0, 1, 2], 1, [25, 26]) //=> [0, 25, 26, 1, 2]
 * insert([0, 1, 2], -2, [25])    //=> [0, 1, 25, 2]
 * insert([0, 1, 2], -5, [25])    //=> [25, undefined, 0, 1, 2]
 */
export const insertAt = <T = unknown>(array: T[], index: number, items: T[]) : T[] => {
  if (isNilOrEmpty(items)) return isArray(array) ? array : [];

  if (!isArray(array)) return fill<T>(index).concat(items);

  if (index < 0 && Math.abs(index) > array.length) {
    return items.concat(fill<T>(Math.abs(index + array.length) - items.length)).concat(array);
  } else if (index < 0) {
    return splice(array, array.length + index + 1, 0, ...items);
  }

  return splice(array, index, 0, ...items);
};