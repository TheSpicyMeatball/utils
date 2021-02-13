import { all, any } from '../_private';

/**
 * Returns true if the value is null or undefined
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNill(null)       //=> true
 * isNill(undefined)  //=> true
 * isNill('')         //=> false
 * isNill([])         //=> false
 * isNill({})         //=> false
 * 
 * // if ANY isNill:
 * isNil.any('test', 0, 1, ['test'], null) //=> true
 * 
 * // if ALL isNill:
 * isNil.all(undefined, null) //=> true
 */
const isNil = (value: unknown) : boolean => value === undefined || value === null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNil.any = (...args: any[]) => any(isNil, ...args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isNil.all = (...args: any[]) => all(isNil, ...args);

export { isNil };