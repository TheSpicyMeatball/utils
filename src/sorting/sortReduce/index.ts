import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { get } from "../../object/get";

/**
 * Reduces to an object's key value for sorting
 * 
 * @since v0.0.1
 * @category Sorting
 * @param {string} key - The key or the path to the key in the object to reduce
 * @returns {<T = Record<string, unknown>>(obj: T) => unknown}
 * @example
 * sortReduce('count')({ count: 25 })
 * //=> 25
 */
export const sortReduce = (key: string) => <T = Record<string, unknown>>(obj: T): unknown => {
  const value = get(obj, key);

  return isNotNilOrEmpty(value) ? value : null;
};