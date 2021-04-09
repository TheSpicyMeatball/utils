/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { isEmpty } from '../isEmpty';
import { all } from '../../logic/all';
import { any } from '../../logic/any';

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
 * 
 * // if ANY isNotEmpty:
 * isNotEmpty.any(undefined, null, '', [], {}, 'test') //=> true
 * 
 * // if ALL isNotEmpty:
 * isNotEmpty.all('test', 0, 1, ['test']) //=> true
 */
const isNotEmpty = (value: any) : boolean => !isEmpty(value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNotEmpty.any = (...args: any[]) => any(isNotEmpty, ...args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNotEmpty.all = (...args: any[]) => all(isNotEmpty, ...args);

export { isNotEmpty };