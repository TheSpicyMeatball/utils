import { commonTrim } from '../_private/commonTrim';

/**
 * Trims the start of a string by whitespace (default), specified string, or array of possible strings
 * 
 * @since v0.0.1
 * @category String
 * @param {string} value - The string to trim
 * @param {string | string[]} [trim] - The string or array of possible strings to trim from the start
 * @param {boolean} [multiline=false] - Whether or not the chars should be trimmed from the start of every line
 * @returns {string}
 * @example
 * trimStart('   The quick brown fox   ');
 * // => 'The quick brown fox   '
 * 
 * trimStart(' foxThe quick brown fox fox fox', ' fox');
 * // => 'The quick brown fox fox fox'
 * 
 * trimStart('  fox The quick brown   fox', ['fox', 'brown', ' ']);
 * // => 'The quick brown   fox'
 */
export const trimStart = (value: string, trim?: string | string[], multiline = false) : string => commonTrim('start', value, trim, multiline);