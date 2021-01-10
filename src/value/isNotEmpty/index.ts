/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { isEmpty } from '../isEmpty';

/**
 * Returns true if the value is NOT empty
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNotEmpty('')               //=> false
 * isNotEmpty([])               //=> false
 * isNotEmpty({})               //=> false
 * isNotEmpty('  ')             //=> true
 * isNotEmpty({x: 'x'})         //=> true
 * isNotEmpty([25])             //=> true
 * isNotEmpty(0)                //=> true
 * isNotEmpty(true)             //=> true
 * isNotEmpty(false)            //=> true
 * isNotEmpty(() => undefined)  //=> true
 */
export const isNotEmpty = (value: any) : boolean => !isEmpty(value);