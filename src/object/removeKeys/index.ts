/* eslint-disable @typescript-eslint/no-explicit-any */
import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from '../../type/type';
import { assign } from './../assign';
import { keys as getKeys } from './../keys';

/**
 * Immutably removes a set of key from an object
 * 
 * @since v0.0.1
 * @category Object
 * @param {T} obj - The original object
 * @param {string[]} keys - An array of keys to remove
 * @returns {*}
 * @example
 * const obj = { hello: 'world', hi: 'earth', hey: 'planet' };
 * removeKeys(obj, ['hi', 'hey']) //=> { hello: 'world' }
 */
export const removeKeys = <T = Record<string, unknown>>(obj: T, keys: string[]) : any =>
  isNotNilOrEmpty(obj) && type(obj) === 'object' && isNotNilOrEmpty(keys)
  ? getKeys(obj).reduce((out, key) => keys.indexOf(key) === -1 ? assign(out, { [key]: obj[key] }) : out, {})
  : obj;