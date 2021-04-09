import { isNilOrEmpty } from '../../value/isNilOrEmpty';

/**
 * Returns true if any value in {args} matches the {check}
 * 
 * @since v1.4.0
 * @category Logic
 * @template {T} - The type of value
 * @param {(value: T) => boolean} check - The condition to check for a match
 * @param {T[]} args - The values to check
 * @returns {boolean}
 * @example
 * any(value => value > 10, 25, 7) //=> true
 * any(value => value > 100, 25, 7) //=> false
 */

export const any = <T = unknown>(check: (value: T) => boolean, ...args: T[]) : boolean => {
  if (isNilOrEmpty(args)) return false;

  for (const value of args) {
    if (check(value)) return true;
  }

  return false;
};