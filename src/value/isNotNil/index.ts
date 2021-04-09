import { isNil } from '../isNil';
import { all } from '../../logic/all';
import { any } from '../../logic/any';

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
 * 
 * // if ANY isNotNil:
 * isNotNil.any(undefined, null, '', [], {}, 'test') //=> true
 * 
 * // if ALL isNotNil:
 * isNotNil.all('', [], {}, 'test') //=> true
 */
const isNotNil = (value: unknown) : boolean => !isNil(value);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNotNil.any = (...args: any[]) => any(isNotNil, ...args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNotNil.all = (...args: any[]) => all(isNotNil, ...args);

export { isNotNil };