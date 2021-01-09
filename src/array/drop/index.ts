import { isNotNilOrEmpty } from './../../value/isNotNilOrEmpty/index';
import { type } from "../../type/type";

/**
 * Immutably drops the first or last specified number of items of an array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} count - If positive, the number of items to drop from the start of the array If negative, the number of items to drop from the end of the array
 * @returns {T[]} The first/last items of the array
 * @example
 * const array = [1, 2, 3];
 * 
 * drop(array, 2)   //=> [3]
 * drop(array, -2)  //=> [1]
 * drop(array, 25)  //=> []
 */
export const drop = <T = unknown>(array: T[], count: number) : T[] =>
  type(array) === 'array' &&
  isNotNilOrEmpty(array) && (
    (count < 0 && array.length > Math.abs(count) && array.slice(0, array.length + count)) ||
    (count > 0 && array.slice(count, array.length)) ||
    (count === 0 && array)
  ) || [];