import { isNotNil } from '../../value/isNotNil';
import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';
import { type } from '../../type/type';

/**
 * Immutably assigns or adds (if it doesn't exist) the specified key and value to the input object
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the input object
 * @param {T} obj - The object on which to assign the key
 * @param {TValues} values - The object with values to assign to the original object
 * @returns {T | TValues | T & TValues | object}
 * @example
 * assign({ x: 'x' }, { x: 'assign' }) //=> { x: 'assign' }
 * assign({ x: 'x' }, { y: 'assign' }) //=> { x: 'x', y: 'assign' }
 * assign({}, { x: 'assign' })         //=> { x: 'assign' }
 * assign(null, { x: 'assign' })       //=> { x: 'assign' }
 * assign([], { x: 'assign' })         //=> { x: 'assign' }
 */
export const assign = <T = Record<string, unknown>, TValues = Record<string, unknown>>(obj: T, values: TValues) : T | TValues | T & TValues | Record<string, unknown> => {
  if (type(obj) === 'object' && isNotNil(obj)) {
    return type(values) === 'object' && isNotNilOrEmpty(values) ? Object.assign({}, obj, values) : obj;
  }

  return type(values) === 'object' && isNotNilOrEmpty(values) ? values : {};
};