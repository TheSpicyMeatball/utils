import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Determines if a string has a fuzzy match to given search terms
 *
 * @since v1.10.0
 * @category String
 * @param {string} value - The string to search
 * @param {string} search - The search terms
 * @returns {boolean}
 * @example
 * fuzzyMatch('Superman', 'sman')
 * // => true
 * 
 * fuzzyMatch('Spiderman', 'sman')
 * // => true
 * 
 * fuzzyMatch('Batman', 'sman')
 * // => false
 */
export const fuzzyMatch = (value: string, search: string) : boolean => {
  if (isNilOrEmpty(value)) return false;
  if (isNilOrEmpty(search)) return true;

  const term = search.split('').join('.*?');
  const regex = new RegExp(term, 'i');
  
  return regex.test(value);
};