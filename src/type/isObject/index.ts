import { type } from '../type';

/**
 * Returns true if the value is an object
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isObject = (value: unknown) : boolean => type(value) === 'object';