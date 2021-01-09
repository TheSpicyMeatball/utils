/**
 * Returns a string representation of the type which also differentiates between 'object', 'array', 'date'
 * 
 * @since v0.0.1
 * @category Type
 * @param {*} value - The value to check
 * @returns {string} The string representation of the type
 * @example
 * type({})                           //=> 'object'
 * type([])                           //=> 'array'
 * type('Hello world')                //=> 'string'
 * type(25)                           //=> 'number'
 * type(false)                        //=> 'boolean'
 * type(() => undefined)              //=> 'function'
 * type(Symbol('Hello symbol world')) //=> 'symbol'
 */
export const type = (value: unknown) : string => {
  if (Array.isArray(value)) return 'array';
  if (value instanceof Date) return 'date';
  return typeof value;
};