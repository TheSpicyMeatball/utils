/**
 * Rounds a number to a maximum specified number of significant digits
 * 
 * @since v0.0.1
 * @category Math
 * @param {number} value - The value to round
 * @param {TValues} values - The maximum number of significant digits to display (e.g. '0' would round to a whole number, '2' would round to at most two decimal places)
 * @returns {number}
 * @example
 * round(0.4, 0)    //=> 0
 * round(0.5, 0)    //=> 1
 * round(0.44, 1)   //=> 0.4
 * round(0.44, -1)  //=> 0.4
 * round(0.45, 1)   //=> 0.5
 * round(0.411, 2)  //=> 0.41
 * round(0.499, 2)  //=> 0.5
 * round(0.999, 2)  //=> 1
 */
export const round = (value: number, maxSignificantDigits: number) : number =>
  Number(Math.round(Number(value + 'e' + Math.abs(maxSignificantDigits))) + 'e-' + Math.abs(maxSignificantDigits));