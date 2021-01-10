import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from '../../type/type';
import { assign } from '../assign';
import { keys } from '../keys';

/**
 * Immutably sorts the object keys
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the original object
 * @param {T} obj - The original object
 * @returns {T}
 * @example
 * const obj = { hamster: true, frog: false, cow: false };
 * sortKeys(obj) //=> { cow: false, frog: false, hamster: true }
 */
export const sortKeys = <T = Record<string, unknown>>(obj: T) : T =>
  isNotNilOrEmpty(obj) && type(obj) === 'object'
  ? keys(obj).sort().reduce((accumulator, key) => assign(accumulator, { [key]: obj[key] }), {}) as T
  : obj;