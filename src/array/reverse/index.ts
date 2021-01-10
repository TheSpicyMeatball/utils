import { isNilOrEmpty } from '../../value/isNilOrEmpty';
import { type } from "../../type/type";

/**
 * Immutably reverse an array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21];
 * 
 * reverse(array)  //=> [21, 25, 7]
 */
export const reverse = <T = unknown>(array: T[]) : T[] =>
  type(array) !== 'array' || isNilOrEmpty(array) ? [] : [...array].reverse();