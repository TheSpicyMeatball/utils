import { isNotNil } from '../isNotNil';
import { isNotEmpty } from '../isNotEmpty';
import { all, any } from '../_private';

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
 * 
 * // if ANY isNotNilOrEmpty:
 * isNotNilOrEmpty.any(null, undefined, '', [], {}, 'test')  //=> true
 * 
 * // if ALL isNotNilOrEmpty:
 * isNotNilOrEmpty.all('test', 0, 1, ['test'])  //=> true;
 */
const isNotNilOrEmpty = (value: unknown) : boolean => isNotNil(value) && isNotEmpty(value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNotNilOrEmpty.any = (...args: any[]) => any(isNotNilOrEmpty, ...args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNotNilOrEmpty.all = (...args: any[]) => all(isNotNilOrEmpty, ...args);

export { isNotNilOrEmpty };