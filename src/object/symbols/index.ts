import { isNotNil } from '../../value/isNotNil';
import { type } from '../../type/type';

/**
 * Gets a string array of the object's own symbols
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the input
 * @param {T} value - The object from which to get the symbols
 * @returns {symbol[]}
 * @example
 * keys({ [Symbol('my symbol')]: 'value' }) //=> [Symbol('my symbol')]
 * keys({})         //=> []
 * keys(null)       //=> []
 * keys(undefined)  //=> []
 * keys('')         //=> []
 * keys([])         //=> ['length']
 */
export const symbols = <T = Record<string, unknown>>(value: T) : symbol[] => 
  isNotNil(value) && type(value) === 'object' ? Object.getOwnPropertySymbols(value) : [];