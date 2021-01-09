import { isDate } from '../../type/isDate';
import { get } from '../../object/get';
import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';

/**
 * Reduces an object's key value (Date or string representation of a date) to a sortable string
 * 
 * @since v0.0.1
 * @category Sorting
 * @param {string} key - The key in the object
 * @param {'h' | 'm' | 's'} [depth] - Compare depth of time, h/m/s
 * @returns {<T = Record<string, unknown>>(obj: T) => string}
 * @example
 * sortReduceDate('stamp')({ stamp: '03/20/2020' })
 * //=> '20200220'
 * 
 * sortReduceDate('stamp')({ stamp: new Date(2020, 9, 7) })
 * //=> '20200907'
 * 
 * sortReduceDate('stamp', 's')({ stamp: '2020-10-20T14:48:25.000' })
 * //=> '20200920144825'
 */
export const sortReduceDate = (key: string, depth?: 'h' | 'm' | 's') => <T = Record<string, unknown>>(obj: T) : string => {
  const value = get(obj, key);

  if (isNotNilOrEmpty(value)) {
    const d = isDate(value) ? value as Date : new Date(value.toString());
    const month = d.getMonth() >= 10 ? d.getMonth().toString() : '0' + d.getMonth().toString();
    const day = d.getDate() >= 10 ? d.getDate().toString() : '0' + d.getDate().toString();

    const hour = d.getHours() >= 10 ? d.getHours().toString() : '0' + d.getHours().toString();      
    const minute = d.getMinutes() >= 10 ? d.getMinutes().toString() : '0' + d.getMinutes().toString();
    const second = d.getSeconds() >= 10 ? d.getSeconds().toString() : '0' + d.getSeconds().toString();

    let date = d.getFullYear().toString() + month + day;

    switch(depth) {
      case 'h': 
        date += hour;
        break;

      case 'm': 
        date += hour + minute;
        break;

      case 's': 
        date += hour + minute + second;
        break;
    }

    return date;
  }
  
  return null;
};