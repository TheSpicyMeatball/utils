import { type } from '../type';

/**
 * Returns true if the value is an instance of Date
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isDate = (value: unknown) : boolean => type(value) === 'date';