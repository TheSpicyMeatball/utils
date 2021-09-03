import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';

/**
 * Returns the person's initials
 * 
 * @since v1.10.0
 * @category String
 * @param {string} firstName - The first name
 * @param {string} lastName - The lastName name
 * @param {string} [preferredFirstName=undefined] - The preferred first name
 * @returns {string}
 * @example
 * initials('Bruce', 'Wayne');
 * // => 'BW'
 * 
 * initials('clark', 'kent', 'superman');
 * // => 'SK'
 */
export const initials = (firstName: string, lastName: string, preferredFirstName?: string) : string => {
  let initials = '';

  if (isNotNilOrEmpty(preferredFirstName)) initials += preferredFirstName.charAt(0).toUpperCase();
  if (initials === '' && isNotNilOrEmpty(firstName)) initials += firstName.charAt(0).toUpperCase();
  if (isNotNilOrEmpty(lastName)) initials += lastName.charAt(0).toUpperCase();

  return initials;
};