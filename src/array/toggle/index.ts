import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from "../../type/type";

/**
 * Immutably adds the item to the array if it's not already included; removes it if it's already included
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {T} item - The item to toggle
 * @returns {T[]}
 * @example
 * const array = [1, 2, 3];
 * 
 * toggle(array, 4)   //=> [1, 2, 3, 4]
 * toggle(array, 2)   //=> [1, 3]
 */
export const toggle = <T = unknown>(array: T[], item: T) : T[] =>
  type(array) === 'array' && isNotNilOrEmpty(array) && array.indexOf(item) >= 0 
  ? array.filter(x => x !== item)
  : [...(array || []), item];