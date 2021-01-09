import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from '../../type/type';

/**
 * Gets the last item of an array
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
 * last(array)              //=> 42
 * last([], 'default')      //=> 'default'
 * last([null], 'default')  //=> 'default'
 */
export const last = <T = unknown, TDefault = unknown>(array: T[], defaultValue?: TDefault) : T | TDefault =>
  type(array) === 'array' &&
  isNotNilOrEmpty(array) &&
  (type(array[array.length - 1]) === 'number' || array[array.length - 1])
  ? array[array.length - 1] : defaultValue;