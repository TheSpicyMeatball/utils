/**
 * Performs an inline if and returns either {whenTrue} or {whenFalse}
 * 
 * @since v0.0.1
 * @category Logic
 * @template {TTrue} - The type of the value returned when the condition is true
 * @template {TFalse} - The type of the value returned when the condition is false
 * @param {boolean} condition - The condition to check
 * @param {TTrue} whenTrue - The value to return if the condition is true
 * @param {TFalse} [whenFalse] - The value to return if the condition is false
 * @returns {TTrue | TFalse}
 * @example
 * iif(true, 25, 7)  //=> 25
 * iif(false, 25, 7) //=> 7
 * iif(false, 25)    //=> undefined
 */
export const iif = <TTrue = unknown, TFalse = unknown>(condition: boolean, whenTrue: TTrue, whenFalse?: TFalse) : TTrue | TFalse => condition ? whenTrue : whenFalse;