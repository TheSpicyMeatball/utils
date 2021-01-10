import { type } from '../../type/type';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Immutably removes an item at the specified index of the array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @param {number} index - The index of the item to remove; use a negative index to count from the end
 * @returns {T[]}
 * @example
 * const array = [7, 5, 21];
 * 
 * removeAt(array, 1)  //=> [7, 21]
 * removeAt(array, -1)  //=> [7, 5]
 */
export const removeAt = <T = unknown>(array: T[], index: number) : T[] => {
  if (type(array) !== 'array' || isNilOrEmpty(array) || isNaN(index) || array.length <= index || array.length + index < 0) return array;

  if (index < 0) {
    index = array.length + index;
    return array.slice(0, index).concat(array.slice(index + 1));
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};