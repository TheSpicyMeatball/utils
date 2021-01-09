import { type } from '../type';

/**
 * Returns true if the value is a function
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isFunction = (value: unknown) : boolean => type(value) === 'function';