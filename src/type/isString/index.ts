import { type } from '../type';

/**
 * Returns true if the value is a string
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isString = (value: unknown) : boolean => type(value) === 'string';