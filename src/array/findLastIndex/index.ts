import { last } from './../last/index';
import { findIndexes } from './../findIndexes/index';

/**
 * Finds the last index in an array that matches the predicate
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
 * findIndexes(array, item => item >= 25 )  //=> 4
 */
export const findLastIndex = <T = unknown>(array: T[], predicate: (item: T) => boolean) : number => last(findIndexes(array, predicate), -1);