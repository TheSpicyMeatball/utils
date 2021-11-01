import { isNil } from '../../value/isNil';
import { replaceAt } from './../replaceAt/index';
import { type } from '../../type/type';

/**
 * Immutably replaces an item or items based on the predicate
 * 
 * @since v1.11.0
 * @category Array
 * @template {T} The type of the array
 * @param {T[]} array The array of items
 * @param {(item: T) => boolean} predicate Function that returns true if the item should be replaced or false if it should not
 * @param {T} item The replacement item
 * @param {boolean} [all=true] Whether or not all items matching the predicate should be replaced or just the first match 
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21];
 * 
 * replaceIf(array, item => item > 20, 97)  
 * //=> [7, 97, 97]
 * 
 * replaceIf(array, item => item > 20, 97, false)  
 * //=> [7, 97, 21]
 */
export const replaceIf = <T = unknown>(array: T[], predicate: (item: T) => boolean, item: T, all = true) : T[] => {
  if (type(array) !== 'array' || isNil(predicate)) return array;

  if (all) {
    return array.map(x => predicate(x) ? item : x);
  }

  return replaceAt(array, array.findIndex(predicate), item);
};