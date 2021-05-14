import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Returns true if all values in {args} match the {check}
 * 
 * @since v1.4.0
 * @category Logic
 * @template {T} - The type of value
 * @param {(value: T) => boolean} check - The condition to check for a match
 * @param {T[]} args - The values to check
 * @returns {boolean}
 * @example
 * all(value => value > 5, 25, 7) //=> true
 * all(value => value > 10, 25, 7) //=> false
 */

export const all = <T = unknown>(check: (value: T) => boolean, ...args: T[]) : boolean => {
  if (isNilOrEmpty(args)) return false;

  for (const value of args) {
    if (!check(value)) return false;
  }

  return true;
};