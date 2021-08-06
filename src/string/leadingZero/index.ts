import { isNotNilOrEmpty } from "../../value/isNotNilOrEmpty";
import { type } from "../../type/type";

/**
 * Adds a leading zero to a value if the value is less than 10
 * 
 * @since v1.9.0
 * @category String
 * @param {string | number} value The original value to possibly add a leading zero
 * @returns {string}
 * @example
 * leadingZero(7)
 * //=> '07'
 * 
 * leadingZero(10)
 * //=> '10'
 */
export const leadingZero = (value: string | number) : string => {
  if (type(value) === 'number') {
    if (value < 10 && value >= 0) return '0' + value.toString();
    if (value >= 10) return value.toString();
  }

  if (type(value) === 'string' && isNotNilOrEmpty(value)) {
    const parsed = parseInt(value.toString());

    if (parsed < 10 && parsed >= 0) return '0' + parsed;
    if (parsed >= 10) return parsed.toString();
  }

  return '00';
};