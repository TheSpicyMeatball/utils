/* eslint-disable @typescript-eslint/no-explicit-any */
import { isNotNilOrEmpty } from '../isNotNilOrEmpty';

/**
 * Returns a default value if the original value is null, undefined, or empty
 * 
 * @since v0.0.1
 * @category Value
 * @template {T} - The type of the input
 * @template {TDefault} - The type of the default value
 * @param {T} value - The value to check
 * @param {TDefault} - The default value to return if {value} is null, undefined, or empty
 * @returns {T | TDefault}
 * @example
 * defaultEmptyTo(null, 'default')              //=> 'default'
 * defaultEmptyTo(undefined, 'default')         //=> 'default'
 * defaultEmptyTo('', 'default')                //=> 'default'
 * defaultEmptyTo([], 'default')                //=> 'default'
 * defaultEmptyTo({}, 'default')                //=> 'default'
 * defaultEmptyTo('value', 'default')           //=> 'value'
 * defaultEmptyTo(['value'], 'default')         //=> ['value']
 * defaultEmptyTo({ key: 'value' }, 'default')  //=> { key: 'value' }
 */
export const defaultEmptyTo = <T = any, TDefault = any>(value: T, defaultValue: TDefault) : T | TDefault => isNotNilOrEmpty(value) ? value : defaultValue;