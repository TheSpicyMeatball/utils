import { inRange } from './../../math/inRange/index';
import { isArray } from '../../type/isArray';
import { removeAt } from '../removeAt';
import { insertAt } from '../insertAt';

/**
 * Immutably moves an item from one index to another
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The original array
 * @param {number} from - The index of the item to move
 * @param {number} to - The index to move the item to
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21, 42];
 * 
 * move(array, 0, 3)  //=> [25, 21, 42, 7]
 * move(array, 3, 0)  //=> [42, 7, 25, 21]
 */
export const move = <T = unknown>(array: T[], from: number, to: number) : T[] => {
  if (!isArray(array) || from === to) return array;

  const range = inRange(0, array.length);
  
  if (!range(from) || !range(to)) return array;

  const item = array[from];

  return insertAt(removeAt(array, from), to - (from < to ? 0 : 0), [item]);
};