import { isNil } from '../isNil';
/**
 * Returns true if the value is NOT null or undefined
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNotNil(null)       //=> false
 * isNotNil(undefined)  //=> false
 * isNotNil('')         //=> true
 * isNotNil([])         //=> true
 * isNotNil({})         //=> true
 */
export const isNotNil = (value: unknown) : boolean => !isNil(value);