/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { type } from '../../type/type';
import { keys } from '../../object/keys';
import { all, any } from '../_private';

/**
 * Returns true if the value is empty
 * 
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isEmpty('')               //=> true
 * isEmpty([])               //=> true
 * isEmpty({})               //=> true
 * isEmpty('  ')             //=> false
 * isEmpty({x: 'x'})         //=> false
 * isEmpty([25])             //=> false
 * isEmpty(0)                //=> false
 * isEmpty(true)             //=> false
 * isEmpty(false)            //=> false
 * isEmpty(() => undefined)  //=> false
 * 
 * // if ANY isEmpty:
 * isEmpty.any('test', 0, 1, ['test'], null) //=> true
 * 
 * // if ALL isEmpty:
 * isEmpty.all(undefined, null, '', [], {})  //=> true
 */
const isEmpty = (value: any) : boolean => {
  switch (type(value)) {
    case 'array':
    case 'string':
      return value.length === 0;

    case 'date':
    case 'boolean':
    case 'number':
    case 'function':
    case 'symbol':
      return false;

    case 'object':
      return keys(value).length === 0;
  
    default:
      return true;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isEmpty.any = (...args: any[]) => any(isEmpty, ...args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
isEmpty.all = (...args: any[]) => all(isEmpty, ...args);

export { isEmpty };