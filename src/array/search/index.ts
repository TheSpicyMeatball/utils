import { type } from "../../type/type";
import { isNilOrEmpty } from '../../value/isNilOrEmpty';
import { SearchOptions } from './options';

/**
 * Searches an array of objects and returns the items that match the search
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @returns {T[]}
 * @example
 * const array = [7, 25, 21];
 * 
 * search(array)  //=> [21, 25, 7]
 */
export function search<T = unknown>(array: T[], search: string | string[], options: SearchOptions = { caseSensitive: false, keys: [] }) : T[] {
  if (type(array) !== 'array' || isNilOrEmpty(array)) {
    return [];
  }

  if (type(search) === 'array') {
    return array.filter(a => {
      let foundCount = 0;
      for (const searchValue of search) {
        for (const key of Object.keys(a)) {
          switch (type(a[key])) {
            case 'string':
              if (options.caseSensitive ? a[key].includes(searchValue) : a[key].toLowerCase().includes(searchValue)) {
                foundCount++;
              }
              break;
            case 'number':
              if (a[key].toString().includes(search)) {
                foundCount++;
              }
              break;
            default:
              break;
          }
        }
      }

      return foundCount === search.length;
    });
  }

  return array.filter(a => {
    for (const key of Object.keys(a)) {
      switch (type(a[key])) {
        case 'string':
          return options.caseSensitive ? a[key].includes(search) : a[key].toLowerCase().includes(search);
        case 'number':
          return a[key].toString().includes(search);
        default:
          break;
      }
    }
  });
}