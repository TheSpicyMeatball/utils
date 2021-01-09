/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Creates an object from another with only the specified keys
 * 
 * @since v0.0.1
 * @category Object
 * @template {T} - The type of the original object
 * @param {T} obj - The original object
 * @param {string[]} keys - The keys of the object to keep
 * @returns {*}
 * @example
 * const obj = { hello: 'world', hi: 'earth', hola: 'mundo' };
 * only(obj, ['hello', 'hola'])
 * //=> { hello: 'world', hola: 'mundo' }
 */
export const only = <T = Record<string, unknown>>(obj: T, keys: string[]) : any =>
  keys && keys.reduce((output, key) => ({ ...output, [key]: obj[key] }), {}) || ({});