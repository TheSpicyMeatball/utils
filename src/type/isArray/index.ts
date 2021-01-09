import { type } from '../type';

/**
 * Returns true if the value is an array
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isArray = (value: unknown) : boolean => type(value) === 'array';