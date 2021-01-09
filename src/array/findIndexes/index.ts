import { isNil } from '../../value/isNil';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';
import { type } from "../../type/type";

/**
 * Finds the indexes of an array that match the predicate
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @param {(item: T) => boolean} predicate - The predicate to determine if an item in the array is a match
 * @returns {number[]}
 * @example
 * const array = [7, 25, 21, 17, 42];
 * 
 * findIndexes(array, item => item >= 25 )  //=> [1, 4]
 */
export const findIndexes = <T = unknown>(array: T[], predicate: (item: T) => boolean) : number[] => {
  if (type(array) !== 'array' || isNilOrEmpty(array) || isNil(predicate)) return [];

  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output = [ ...output, i];
    }
  }

  return output;
};