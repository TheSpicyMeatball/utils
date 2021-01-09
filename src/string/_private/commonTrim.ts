import { isString } from '../../type/isString';
import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Trims the start and the end of a string by whitespace (default), specified string, or array of possible strings
 * 
 * @since v0.0.1
 * @category String
 * @param {'start' | 'end'} type - The type of trim to do
 * @param {string} value - The string to trim
 * @param {string | string[]} [trim] - The string or array of possible strings to trim from the start and end
 * @param {boolean} [multiline=false] - Whether or not the chars should be trimmed from the start and end of every line
 * @returns {string}
 */
export const commonTrim = (type: 'start' | 'end', value: string, trim?: string | string[], multiline = false) : string => {
  if (isNilOrEmpty(value) || !isString(value)) return '';

  let _trim = '\\s';
  const specialCharsEscape = /\[|\\|\/|\^|\$|\.|\||\?|\*|\+|\(|\)|\]|\{|\}/g;

  if (isNotNilOrEmpty(trim)) {
    if (Array.isArray(trim)) {
      _trim = trim.map(x => x.replace(specialCharsEscape, '\\$&')).join('|');
    } else {
      _trim = trim.toString().replace(specialCharsEscape, '\\$&');
    }
  }

  const regex = new RegExp(type === 'start' ? `^(?:${_trim})*` : `(?:${_trim})*$`, multiline ? 'gm' : 'g');
  return value.replace(regex, '');
};