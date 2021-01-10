import { isNotNil } from '../../value/isNotNil';
import { type } from '../../type/type';

/**
 * Gets the item at the specified index of an array
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @template {TDefault} - The type of the default value
 * @param {T[]} array - The array to check
 * @param {number} index - The index of the array to get; use a negative value to count from the end of the array
 * @param {TDefault} defaultValue - The value to return if there is no value at the specified index
 * @returns {T | TDefault}
 * @example
 * at([0, 1, 2], 1, 'default') //=> 1
 * at([0, 1, 2], 25, 'default') //=> default
 */
export const at = <T = unknown, TDefault = unknown>(array: T[], index: number, defaultValue?: TDefault) : T | TDefault => {
  if (isNotNil(array) && type(array) === 'array') {
    if (index < 0 && isNotNil(array[array.length + index])) {
      return array[array.length + index];
    }

    if (index >= 0 && isNotNil(array[index])) {
      return array[index];
    }
  }

  return defaultValue;
};