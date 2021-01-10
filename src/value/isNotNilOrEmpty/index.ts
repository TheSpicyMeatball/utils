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
 * isNotNilOrEmpty(null)             //=> false
 * isNotNilOrEmpty(undefined)        //=> false
 * isNotNilOrEmpty('')               //=> false
 * isNotNilOrEmpty([])               //=> false
 * isNotNilOrEmpty({})               //=> false
 * isNotNilOrEmpty('  ')             //=> true
 * isNotNilOrEmpty({x: 'x'})         //=> true
 * isNotNilOrEmpty([25])             //=> true
 * isNotNilOrEmpty(0)                //=> true
 * isNotNilOrEmpty(true)             //=> true
 * isNotNilOrEmpty(() => undefined)  //=> true
 */
export const isNotNilOrEmpty = (value: unknown) : boolean => isNotNil(value) && isNotEmpty(value);