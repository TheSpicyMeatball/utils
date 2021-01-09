import { isNotNil } from '../../value/isNotNil';

/**
 * Gets a string array of the object's own keys
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the input
 * @param {T} value - The object from which to get the keys
 * @returns {string[]}
 * @example
 * keys({ x: 'x' }) //=> ['x']
 * keys({})         //=> []
 * keys(null)       //=> []
 * keys(undefined)  //=> []
 * keys('')         //=> []
 * keys([])         //=> ['length']
 */
export const keys = <T = Record<string, unknown>>(value: T) : string[] => 
  isNotNil(value) && typeof value === 'object' ? Object.getOwnPropertyNames(value) : [];