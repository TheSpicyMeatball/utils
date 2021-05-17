import { first } from '../first';
import { type } from '../../type/type';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Immutably removes an item at the specified index of the array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @param {...number} indexes - The index(es) of the item(s) to remove; use a negative index to count from the end
 * @returns {T[]}
 * @example
 * const array = [7, 5, 21];
 * 
 * removeAt(array, 1)  //=> [7, 21]
 * removeAt(array, -1)  //=> [7, 5]
 * 
 * // remove multiple items
 * removeAt(array, 1, 2)  //=> [7]
 * removeAt(array, -1, 0)  //=> [5]
 */
export const removeAt = <T = unknown>(array: T[], ...indexes: number[]) : T[] => {
  if (type(array) !== 'array' || isNilOrEmpty.any(array, indexes)) return array;

  if (indexes.length > 1) {
    let output = [];
    indexes = indexes.map(x => x >= 0 ? x : array.length + x);

    for (let index = 0; index < array.length; index++) {
      if (indexes.indexOf(index) === -1) {
        output = [...output, array[index]];
      }
    }
    return output;
  }

  let index = first<number, number>(indexes);
  if (isNaN(index) || array.length <= index || array.length + index < 0) return array;

  if (index < 0) {
    index = array.length + index;
    return array.slice(0, index).concat(array.slice(index + 1));
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};