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
 * isEmpty('')               //=> false
 * isEmpty([])               //=> false
 * isEmpty({})               //=> false
 * isEmpty('  ')             //=> true
 * isEmpty({x: 'x'})         //=> true
 * isEmpty([25])             //=> true
 * isEmpty(0)                //=> true
 * isEmpty(true)             //=> true
 * isEmpty(false)            //=> true
 * isEmpty(() => undefined)  //=> true
 */
export const isNotEmpty = (value: any) : boolean => !isEmpty(value);