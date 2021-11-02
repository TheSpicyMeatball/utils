import { isNil } from '../../value/isNil';
import { removeAt } from '../removeAt';
import { findIndexes } from '../findIndexes';
import { type } from '../../type/type';

/**
 * Immutably removes an item or items based on the predicate
 * 
 * @since v1.12.0
 * @category Array
 * @template {T} The type of the array
 * @param {T[]} array The array of items
 * @param {(item: T) => boolean} predicate Function that returns true if the item should be removed or false if it should not
 * @param {boolean} [all=true] Whether or not all items matching the predicate should be removed or just the first match 
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21];
 * 
 * removeIf(array, item => item > 20)  
 * //=> [7]
 * 
 * removeIf(array, item => item > 20, false)  
 * //=> [7, 21]
 */
export const removeIf = <T = unknown>(array: T[], predicate: (item: T) => boolean, all = true) : T[] => {
  if (type(array) !== 'array' || isNil(predicate)) return array;

  let indexes: number[] = [];

  if (all) {
    indexes = findIndexes(array, predicate);
  } else {
    indexes = [array.findIndex(predicate)];
  }

  return removeAt(array, ...indexes);
};