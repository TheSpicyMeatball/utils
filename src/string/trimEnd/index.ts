import { commonTrim } from '../_private/commonTrim';

/**
 * Trims the end of a string by whitespace (default), specified string, or array of possible strings
 * 
 * @since v0.0.1
 * @category String
 * @param {string} value - The string to trim
 * @param {string | string[]} [trim] - The string or array of possible strings to trim from the end
 * @param {boolean} [multiline=false] - Whether or not the chars should be trimmed from the end of every line
 * @returns {string}
 * @example
 * trimEnd('   The quick brown fox   ');
 * // => '   The quick brown fox'
 * 
 * trimEnd(' foxThe quick brown fox fox fox', ' fox');
 * // => ' foxThe quick brown'
 * 
 * trimEnd('  fox The quick brown   fox', ['fox', 'brown', ' ']);
 * // => '  fox The quick'
 */
export const trimEnd = (value: string, trim?: string | string[], multiline = false) : string => commonTrim('end', value, trim, multiline);