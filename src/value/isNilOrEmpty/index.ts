import { isNil } from '../isNil';
import { isEmpty } from '../isEmpty';

/**
 * Returns true if the value is null, undefined, or empty
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNilOrEmpty(null)             //=> true
 * isNilOrEmpty(undefined)        //=> true
 * isNilOrEmpty('')               //=> true
 * isNilOrEmpty([])               //=> true
 * isNilOrEmpty({})               //=> true
 * isNilOrEmpty('  ')             //=> false
 * isNilOrEmpty({x: 'x'})         //=> false
 * isNilOrEmpty([25])             //=> false
 * isNilOrEmpty(0)                //=> false
 * isNilOrEmpty(true)             //=> false
 * isNilOrEmpty(() => undefined)  //=> false
 */
export const isNilOrEmpty = (value: unknown) : boolean => isNil(value) || isEmpty(value);