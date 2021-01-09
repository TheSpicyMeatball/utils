import { isNotNilOrEmpty } from "../../value/isNotNilOrEmpty";
import { type } from "../../type/type";

/**
 * Capitalizes every word in the string
 * 
 * @since v0.0.1
 * @category String
 * @param {string} original - The original string
 * @returns {string}
 * @example
 * capitalize('fox')
 * //=> 'Fox'
 * 
 * remove('the quick brown fox') 
 * //=> 'The Quick Brown Fox'
 */
export const capitalize = (value: string) : string =>
  isNotNilOrEmpty(value) && type(value) === 'string' ? value.replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : '';