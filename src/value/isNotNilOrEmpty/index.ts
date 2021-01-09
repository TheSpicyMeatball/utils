import { isNotNil } from '../isNotNil';
import { isNotEmpty } from '../isNotEmpty';

/**
 * Returns true if the value is NOT null, undefined, or empty
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNilOrEmpty(null)             //=> false
 * isNilOrEmpty(undefined)        //=> false
 * isNilOrEmpty('')               //=> false
 * isNilOrEmpty([])               //=> false
 * isNilOrEmpty({})               //=> false
 * isNilOrEmpty('  ')             //=> true
 * isNilOrEmpty({x: 'x'})         //=> true
 * isNilOrEmpty([25])             //=> true
 * isNilOrEmpty(0)                //=> true
 * isNilOrEmpty(true)             //=> true
 * isNilOrEmpty(() => undefined)  //=> true
 */
export const isNotNilOrEmpty = (value: unknown) : boolean => isNotNil(value) && isNotEmpty(value);