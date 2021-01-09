import { isNilOrEmpty } from '../../value/isNilOrEmpty';
import { isObject } from '../../type/isObject';
import { RangeBoundary } from '../../types';

/**
 * Determines whether or not the value is within the numeric range
 * 
 * @since v0.0.1
 * @category Math
 * @param {number | RangeBoundary} lower - The lower bound; by default this is considered inclusive
 * @param {number | RangeBoundary} upper - The upper bound; by default this is considered exclusive
 * @returns {(value: number) => boolean}
 * @example
 * inRange(0, 9)(7)       //=> true
 * inRange(0, 9)(27)      //=> false
 * inRange(0.44, 1)(0.5)  //=> true
 * inRange(-100, 50)(0)   //=> true
 * 
 * // boundary
 * inRange(0, 50)(0)      //=> true
 * inRange(0, 50)(50)     //=> false
 * 
 * inRange({ bound: 0, inclusive: false }, { bound: 0, inclusive: true })(0)
 * //=> false
 * 
 * inRange({ bound: 0, inclusive: false }, { bound: 0, inclusive: true })(50)
 * //=> true
 * @docgen_types
 * type RangeBoundary = { bound: number, inclusive: boolean };
 * @docgen_import { inRange, RangeBoundary }
 * @docgen_import_note
 * <code>RangeBoundary</code> is a TypeScript type that can only be imported in TypeScript projects. However, you can still 
 * pass in an object with the same shape to the <code>upper</code> and <code>lower</code> params for non-TypeScript usage.
 */
export const inRange = (lower: number | RangeBoundary, upper: number | RangeBoundary) => (value: number) : boolean => {
  if (isNilOrEmpty(value)) return false;

  const _lower = isObject(lower) ? lower as RangeBoundary : { bound: lower, inclusive: true };
  const _upper = isObject(upper) ? upper as RangeBoundary : { bound: upper, inclusive: false };

  if (_upper.bound < _lower.bound) return false;
  if (value === _lower.bound) return _lower.inclusive;
  if (value === _upper.bound) return _upper.inclusive;

  return value > _lower.bound && value < _upper.bound;
};