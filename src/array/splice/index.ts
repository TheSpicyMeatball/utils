import { isNilOrEmpty } from '../../value/isNilOrEmpty';
import { type } from "../../type/type";

/**
 * Immutably adds/removes items from within the array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} start - The index to start the splice
 * @param {number} deleteCount - The number of items to remove
 * @param {...T[]} items - The item(s) to add
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21, 17, 42];
 * 
 * splice(array, 1, 1, 99, 98)
 * //=> [7, 99, 98, 21, 17, 42]
 */
export const splice = <T = unknown>(array: T[], start: number, deleteCount: number, ...items: T[]) : T[] =>
  type(array) !== 'array' || isNilOrEmpty(array)
  ? [...items]
  : [...array.slice(0, start), ...items, ...array.slice(start + deleteCount)];