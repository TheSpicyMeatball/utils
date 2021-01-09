import { type as typeOf } from '../type';

/**
 * Returns true if the type of value is the same as the provided type
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * is('Hello world', 'string') //=> true
 * is({}, 'object')            //=> true
 * is(null, 'object')          //=> true
 * is(undefined, 'undefined')  //=> true
 * is(25, 'symbol')            //=> false
 */
export const is = (value: unknown, type: string) : boolean => typeOf(value) === type;