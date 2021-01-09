import { fill } from './../fill/index';
import { type } from '../../type/type';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Gets an array of items given a set of indexes
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array to pluck
 * @param {number[]} indexes - The indexes of items to pluck
 * @returns {T[]}
 * @example
 * const array = ['a', 'b', 'c'];
 * 
 * pluck(array, [0, 2])      //=> ['a', 'c']
 * pluck(array, [0, 2, 17])  //=> ['a', 'c', undefined]
 * 
 * pluck(array, [])          //=> []
 * pluck([], [0, 2])         //=> [undefined, undefined]
 * pluck(null, [0, 2])       //=> [undefined, undefined]
 * pluck(undefined, [0, 2])  //=> [undefined, undefined]
 */
export const pluck = <T = unknown>(array: T[], indexes: number[]) : T[] => {
  if (isNilOrEmpty(indexes)) return [];
  if (type(array) !== 'array' || isNilOrEmpty(array)) return fill<T>(indexes.length);

  return indexes.map(i => array[i]);
};