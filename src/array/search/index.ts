import { isNotEmpty } from '../..';
import { type } from '../../type/type';
import { SearchOptions } from '../../types';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Searches an array of objects and returns the items that match the search
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {T[]} array - The array of items
 * @param {string | string[]} search - The search term or array of search terms
 * @param {SearchOptions} options - The optional different configuration options that can be used to customize the search
 * @returns {T[]}
 * @example
 * const array = [
 *   { name: 'John Doe', address: '123 Sesame Street', amount: 1000 },
 *   { name: 'Jane Doe', address: '456 Walnut Street', amount: 500 },
 * ];
 * 
 * search(array, 'joh', { keys: ['name'], caseSensitive: false })  //=> [{ name: 'John Doe', address: '123 Sesame Street', amount: 1000 }]
 */
export function search<T = unknown>(array: T[], search: string | string[], options: SearchOptions = { caseSensitive: false, keys: [] }) : T[] {
  if (type(array) !== 'array' || isNilOrEmpty(array)) {
    return [];
  }

  let searchTerms: string[];
  if (type(search) === 'array') {
    searchTerms = [...search as Array<string>];
  } else {
    searchTerms = [search as string];
  }

  return array.filter(a => {
    let foundCount = 0;
    for (const term of searchTerms) {
      let found = false;
      for (const key of (isNotEmpty(options.keys) ? options.keys : Object.keys(a))) {
        if (found) {
          continue;
        }
        switch (type(a[key])) {
          case 'string':
            if (options.caseSensitive ? a[key].includes(term) : a[key].toLowerCase().includes(term)) {
              foundCount++;
              found = true;
            }
            break;
          case 'number':
            if (a[key].toString().includes(term)) {
              foundCount++;
              found = true;
            }
            break;
          default:
            break;
        }
      }
    }

    return foundCount === searchTerms.length;
  });
}