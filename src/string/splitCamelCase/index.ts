import { isNotNilOrEmpty } from "../../value/isNotNilOrEmpty";
import { type } from "../../type/type";

/**
 * Splits a camel-cased string apart and capitalizes each word
 * 
 * @since v0.0.1
 * @category String
 * @param {string} value - The camel-cased string to split
 * @param {string | RegExp} match - The string or RegExp to match for removal
 * @returns {string}
 * @example
 * remove('TheQuickBrownFox') //=> 'The Quick Brown Fox'
 * remove('theQuickBrownFox') //=> 'The Quick Brown Fox'
 */
export const splitCamelCase = (value: string) : string =>
  isNotNilOrEmpty(value) && type(value) === 'string'
  ? value.replace(/([A-Z][a-z])/g, '$1')
         .replace(/([a-z])(?=[A-Z])/g, '$1 ')
         .replace(/([a-z])(?=[0-9])/g, '$1 ')
         .replace(/^./, value => value.toUpperCase())
         .trim()
  : '';