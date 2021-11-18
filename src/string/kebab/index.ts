import { first } from '../../array/first';
import { isString } from '../../type/isString';
import { isNilOrEmpty } from "../../value/isNilOrEmpty";
import { splitCamelCase } from '../splitCamelCase';

/**
 * Converts the string to kebab case
 * 
 * @since v0.0.1
 * @category String
 * @param {string} original - The original string
 * @returns {string}
 * @example
 * kebab('Hello World')        //=> 'hello-world'
 * kebab('-%^-hello-world--')  //=> 'hello-world'
 * kebab('$@__HELLO+WORLD__')  //=> 'hello-world'
 * kebab('2Hello 7world')      //=> 'hello-7-world'
 */
export const kebab = (value: string) : string => {
  if (isNilOrEmpty(value) || !isString(value)) return '';
  
  const matches = Array.from(splitCamelCase(value).matchAll(/(?:[a-zA-Z])+.*[0-9]*/g));

  // Remove special chars, insert basic dashes, make lower case, remove spaces
  const output = first(first(first(matches), '').replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().match(/(?:(?:[a-zA-Z0-9])+-*(?:[a-zA-Z0-9]))*/g), '');

  // Insert dashes around numbers, remove any dashes next to dashes
  return output.replace(/( [a-z])/g, '-$1').replace(/([0-9])([a-z])/g, '$1-$2').replace(/([a-z])([0-9])/g, '$1-$2').trim().replace(/-{2,}/, '-');
};