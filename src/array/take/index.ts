import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from "../../type/type";

/**
 * Gets the first or last specified number of items of an array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} count - If positive, the number of items to take from the start of the array If negative, the number of items to take from the end of the array
 * @returns {T[]} The first/last items of the array
 * @example
 * const array = [1, 2, 3];
 * 
 * take(array, 2)   //=> [1, 2]
 * take(array, -2)  //=> [2, 3]
 * take(array, 25)  //=> [1, 2, 3]
 */
export const take = <T = unknown>(array: T[], count: number) : T[] =>
  type(array) === 'array' &&
  isNotNilOrEmpty(array) && (
    (count < 0 && array.slice(array.length > Math.abs(count) ? array.length + count : 0, array.length)) ||
    (count > 0 && array.slice(0, count))
  ) || [];