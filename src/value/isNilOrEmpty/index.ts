import { isNil } from '../isNil';
import { isEmpty } from '../isEmpty';
import { all } from '../../logic/all';
import { any } from '../../logic/any';

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
 * 
 * // if ANY isNilOrEmpty:
 * isNilOrEmpty.any('test', 0, 1, ['test'], null) //=> true
 * 
 * // if ALL isNilOrEmpty:
 * isNilOrEmpty.all(null, undefined, '', [], {})  //=> true
 */
const isNilOrEmpty = (value: unknown) : boolean => isNil(value) || isEmpty(value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNilOrEmpty.any = (...args: any[]) => any(isNilOrEmpty, ...args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNilOrEmpty.all = (...args: any[]) => all(isNilOrEmpty, ...args);

export { isNilOrEmpty };