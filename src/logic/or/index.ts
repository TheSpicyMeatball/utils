import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';

/**
 * Returns true if {value} has equality with any item in {args}
 * 
 * @since v1.4.0
 * @category Logic
 * @template {T} - The type of value
 * @param {T} value - The value to compare against
 * @param {*[]} args - Known values to compare against {value}
 * @returns {boolean}
 * @example
 * or('item', 25, 7, 'item') //=> true
 * or('item', 25, 7, 'something') //=> false
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const or = <T = unknown>(value: T, ...args: any[]) : boolean => isNotNilOrEmpty(args) ? args.some(x => x === value) : false;