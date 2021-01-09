import { type } from '../type';

/**
 * Returns true if the value is a symbol
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isSymbol = (value: unknown) : boolean => type(value) === 'symbol';