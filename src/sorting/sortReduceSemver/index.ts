import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { first } from '../../array/first';
import { get } from '../../object/get';

/**
 * Reduces an object's key value (Semver) to a sortable string
 *
 * @since v0.0.1
 * @category Sorting
 * @param {string} key - The key in the object
 * @param {number} [seed=100000] - A number to seed each major/minor/patch portion of the semver string to aid in the numeric sorting. You should never have to change this number unless one part of your version could be larger than the default.
 * @returns {<T = unknown>(obj: T) => string} - The sorting function
 */
export const sortReduceSemver = (key: string, seed = 100000) => <T = unknown>(obj: T) : string => {
  const value = get(obj, key);
  
  return isNotNilOrEmpty(value)
         ? first(first(value.toString().split('-'), '').match(/([0-9]+\.?)+/g), '').split('.').map((n: string) => +n+seed ).join('.')
         : null;
};