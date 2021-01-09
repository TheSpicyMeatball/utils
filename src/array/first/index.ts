import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from '../../type/type';

/**
 * Gets the first item of an array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @template {TDefault} - The type of the default value
 * @param {T[]} array - The array of items
 * @param {TDefault} [defaultValue] - The default value if the item is null or undefined
 * @returns {T | TDefault}
 * @example
 * const array = [7, 25, 21, 17, 42];
 * 
 * first(array)              //=> 7
 * first([], 'default')      //=> 'default'
 * first([null], 'default')  //=> 'default'
 */
export const first = <T = unknown, TDefault = unknown>(array: T[], defaultValue?: TDefault) : T | TDefault =>
  type(array) === 'array' &&
  isNotNilOrEmpty(array) &&
  (type(array[0]) === 'number' || array[0])
  ? array[0] : defaultValue;