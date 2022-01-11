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
 * @param {(item: T) => R} [reducer] - Optional function to take an array item and reduce it to a value that will be used as the basis for the toggle comparison
 * @returns {T[]}
 * @example
 * const array = [1, 2, 3];
 * 
 * toggle(array, 4)   //=> [1, 2, 3, 4]
 * toggle(array, 2)   //=> [1, 3]
 * @example
 * const array = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
 * const reducer = x => x.id;
 * 
 * toggle(array, { id: 3, value: 'c' }, reducer);
 * //=> [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'c' }]
 * 
 * toggle(array, { id: 1, value: 'a' }, reducer);
 * //=> [{ id: 2, value: 'b' }]
 */
export const toggle = <T = unknown, R = unknown>(array: T[], item: T, reducer?: (item: T) => R) : T[] => {
  if (isNotNilOrEmpty(reducer)) {
    const reducedItem = reducer(item);

    return type(array) === 'array' && isNotNilOrEmpty(array) && array.find(x => reducer(x) === reducedItem) 
           ? array.filter(x => reducer(x) !== reducedItem)
           : [...(array || []), item];
  }

  return type(array) === 'array' && isNotNilOrEmpty(array) && array.indexOf(item) >= 0 
  ? array.filter(x => x !== item)
  : [...(array || []), item];
};