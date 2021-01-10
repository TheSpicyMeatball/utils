import { isObject } from '../../type/isObject';
import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Gets the value at the specified path of the object
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the original object
 * @template {TReturn} - The type of the return value
 * @template {TDefault} - The type of the default value
 * @param {T} obj - The original object
 * @param {string} path - The path to the desired key
 * @param {TDefault} defaultValue - The default value to return if the resolved value is undefined
 * @returns {TReturn | TDefault}
 * @example
 * get({ a: { b: { c: 3 }, d: null } }, 'a.b.c', 'default')  => 3
 * get({ a: { b: { c: 3 }, d: null } }, 'a.b.d', 'default')  => 'default'
 * get({ a: { b: { c: 3 }, d: null } }, 'x.y.z', 'default')  => 'default'
 */
export const get = <T = Record<string, unknown>, TReturn = unknown, TDefault = unknown>(obj: T, path: string, defaultValue?: TDefault) : TReturn | TDefault => {
  if (isNilOrEmpty(obj) || isNilOrEmpty(path)) return defaultValue;

  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj;

  for (const key of keys) {
    if (isNotNilOrEmpty(current) && isObject(current) && key in current && current[key] !== undefined) {
      current = current[key];
    } else {
      return defaultValue;
    }
  }

  return current as TReturn;
};