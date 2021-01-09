import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty/index';
import { isNilOrEmpty } from '../../value/isNilOrEmpty/index';
import { type } from '../../type/type';

/**
 * Checks if the path is a direct property of obj
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the original object
 * @param {T} obj - The original object
 * @param {string} path - The path to the desired key
 * @returns {boolean}
 * @example
 * has({ a: { b: { c: 3 }, d: null } }, 'a.b.c')  => true
 * has({ a: { b: { c: 3 }, d: null } }, 'a.b.d')  => false
 * has({ a: { b: { c: 3 }, d: null } }, 'x.y.z')  => false
 */
export const has = <T = Record<string, unknown>>(obj: T, path: string) : boolean => {
  if (isNilOrEmpty(obj) || isNilOrEmpty(path)) return false;

  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj;

  for (const key of keys) {
    if (isNotNilOrEmpty(current) && type(current) === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }

  return true;
};