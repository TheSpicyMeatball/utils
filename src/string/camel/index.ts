import { first } from '../../array/first';
import { isString } from '../../type/isString';
import { isNilOrEmpty } from "../../value/isNilOrEmpty";
import { remove } from '../remove';

/**
 * Converts the string to camel case
 * 
 * @since v0.0.1
 * @category String
 * @param {string} original - The original string
 * @returns {string}
 * @example
 * camel('Hello World')        //=> 'helloWorld'
 * camel('-%^-hello-world--')  //=> 'helloWorld'
 * camel('$@__HELLO+WORLD__')  //=> 'helloWorld'
 * camel('2Hello 7world')      //=> 'hello7World'
 */
export const camel = (value: string) : string => {
  if (isNilOrEmpty(value) || !isString(value)) return '';
  
  const matches = Array.from(value.matchAll(/(?:[a-zA-Z])+.*[0-9]*/g));

  if (isNilOrEmpty(matches)) return '';

  const match = first(first(matches), '');

  // If it's already perfectly camel-cased, return
  if (!/[^a-zA-Z0-9]/g.test(match)) return match;

  let output = match.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase();
  
  const needsUpper = Array.from(output.matchAll(/(?<=\s)([a-z])|(?<=[0-9])([a-z])/g));
  
  for (const upper of needsUpper) {
    output = output.substring(0, upper.index) + first(upper, '').toUpperCase() + output.substring(upper.index + 1);
  }

  return remove(output, ' ').trim();
};