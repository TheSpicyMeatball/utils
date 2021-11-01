import { isNumber } from '../../type/isNumber';
import { at } from '../../array/at';

/**
 * Creates a comma separated number string
 * 
 * @since v1.11.0
 * @category Number
 * @param {number} value The number from which to create a comma separated string
 * @returns {string}
 * @example
 * commaString(1234567);
 * //=> '1,234,567'
 * 
 * commaString(1234.567);
 * //=> '1,234.567'
 */
export const commaString = (value: number) : string => {
  if (!isNumber(value)) {
    throw Error('{value} must be a number');
  } 
  
  const array = value.toString().split('.');
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  if (array.length > 1) {
    return `${at(array, 0, '0').replace(regex, ",")}.${at(array, 1, '0')}`;
  }

  return value.toString().replace(regex, ",");
};