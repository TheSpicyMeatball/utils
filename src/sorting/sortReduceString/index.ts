import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { get } from "../../object/get";
import { iif } from '../../logic/iif';

/**
 * Reduces an object's key value to a sortable string
 * 
 * @since v0.0.1
 * @category Sorting
 * @param {string} key - The key or the path to the key in the object to reduce
 * @param {boolean} caseSensitive - Whether or not the string should be returned as is or converted to lower case for string insensitive searches
 * @returns {<T = Record<string, unknown>>(obj: T) => string}
 * @example
 * const obj = { name: 'Kermit the Frog' };
 * 
 * sortReduceString(obj)('name')
 * //=> 'kermit the frog'
 * 
 * sortReduceString('name', true)(obj)
 * //=> 'Kermit the Frog'
 * 
 * // Path to Key
 * const obj = { user: { name: 'Kermit the Frog' } };
 * sortReduceString('user.name')(obj)
 * //=> 'kermit the frog'
 */
export const sortReduceString = (key: string, caseSensitive = false) => <T = Record<string, unknown>>(obj: T): string => {
  const value = get(obj, key);

  return isNotNilOrEmpty(value)
         ? iif(caseSensitive, value.toString(), value.toString().toLowerCase())
         : null;
};