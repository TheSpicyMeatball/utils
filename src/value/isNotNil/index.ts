import { isNil } from '../isNil';
/**
 * Returns true if the value is NOT null or undefined
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNill(null)       //=> false
 * isNill(undefined)  //=> false
 * isNill('')         //=> true
 * isNill([])         //=> true
 * isNill({})         //=> true
 */
export const isNotNil = (value: unknown) : boolean => !isNil(value);