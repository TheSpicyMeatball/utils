import { fill } from '../fill';
import { splice } from '../splice';
import { type } from '../../type/type';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Immutably replaces an item at the specified index of the array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @param {number} index - The index of the item to replace; use a negative index to count from the end
 * @param {T} item - The replacement item
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21];
 * 
 * replaceAt(array, 1, 97)  //=> [7, 97, 21]
 */
export const replaceAt = <T = unknown>(array: T[], index: number, item: T) : T[] => {
  if (isNilOrEmpty(array) && type(index) === 'number') {
    if (index < 0) return [item];
    array = fill<T>(index + 1);
  }

  if (type(array) !== 'array' || isNaN(index) || (index < 0 && array.length + index < 0)) return array;

  if (index < 0) {
    return splice(array, array.length + index, 1, item);
  } else if (array.length < index) {
    array = array.concat(fill<T>(index - array.length));
  }

  return splice(array, index, 1, item);
};