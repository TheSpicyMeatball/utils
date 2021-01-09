import { type } from '../../type/type';
import { isNotNil } from '../../value/isNotNil';
import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';

/**
 * Counts the number of items that match the condition
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @param {(item: T) => boolean} predicate - The predicate to determine if an item in the array is a match
 * @returns {number}
 * @example
 * const array = [7, 25, 21, 17, 42];
 * 
 * count(array, item => item >= 25 )  //=> 2
 */
export const count = <T = unknown>(array: T[], predicate: (item: T) => boolean) : number =>
  type(array) === 'array' && isNotNilOrEmpty(array) && isNotNil(predicate) && array.filter(predicate).length || 0;