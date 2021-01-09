/* eslint-disable @typescript-eslint/no-explicit-any */
import { isNotNil } from '../isNotNil/index';
/**
 * Returns a default value if the original value is null or undefined
 * 
 * @since v0.0.1
 * @category Value
 * @template {T} - The type of the input
 * @template {TDefault} - The type of the default value
 * @param {T} value - The value to check
 * @param {TDefault} - The default value to return if {value} is null or undefined
 * @returns {T | TDefault}
 * @example
 * defaultTo('value', 'default')     //=> 'value'
 * defaultTo('', 'default')          //=> ''
 * defaultTo(undefined, 'default')   //=> 'default'
 * defaultTo(undefined, 'default')   //=> 'default'
 */
export const defaultTo = <T = any, TDefault = any>(value: T, defaultValue: TDefault) : T | TDefault => isNotNil(value) ? value : defaultValue;