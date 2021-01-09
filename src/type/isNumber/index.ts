import { type } from '../type';

/**
 * Returns true if the value is a number
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isNumber = (value: unknown) : boolean => type(value) === 'number';