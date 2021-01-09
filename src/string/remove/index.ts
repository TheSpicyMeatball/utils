import { isNotNil } from "../../value/isNotNil";
import { type } from "../../type/type";

/**
 * Removes a matching string or RegExp
 * 
 * @since v0.0.1
 * @category String
 * @param {string} original - The original string
 * @param {string | RegExp} match - The string or RegExp to match for removal
 * @returns {string}
 * @example
 * remove('The quick brown fox', 'quick ') //=> 'The brown fox'
 * remove(null, 'quick')                   //=> ''
 */
export const remove = (original: string, match: string | RegExp) : string =>
  isNotNil(original) && type(original) === 'string' ? original.replace(match, '') : '';