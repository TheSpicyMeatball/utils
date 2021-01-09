import { commonTrim } from '../_private/commonTrim';

/**
 * Trims the start and the end of a string by whitespace (default), specified string, or array of possible strings
 * 
 * @since v0.0.1
 * @category String
 * @param {string} value - The string to trim
 * @param {string | string[]} [trim] - The string or array of possible strings to trim from the start and end
 * @param {boolean} [multiline=false] - Whether or not the chars should be trimmed from the start and end of every line
 * @returns {string}
 * @example
 * trim('   The quick brown fox    ');
 * // => 'The quick brown fox'
 * 
 * trim(' foxThe quick brown fox fox fox', ' fox');
 * // => 'The quick brown'
 * 
 * trim('  fox The quick brown   fox', ['fox', 'brown', ' ']);
 * // => 'The quick'
 */
export const trim = (value: string, trim?: string | string[], multiline = false) : string =>
  commonTrim('start', commonTrim('end', value, trim, multiline), trim, multiline);