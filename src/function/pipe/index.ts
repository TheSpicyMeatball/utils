import { isNotEmpty } from '../../value/isNotEmpty';
import { AnyFunction } from '../../types';

/**
 * Executes a queue of nested functions where the result of each function is fed as an argument into the subsequent function in the queue
 * 
 * @since v1.5.0
 * @category Function
 * @template {T} - The type of the initial input arg
 * @template {TReturn} - The return type
 * @param {...AnyFunction} funcs - The function queue
 * @returns {(value?: T) => TReturn | T}
 * @example
 * const addOne = x => x + 1;
 * const addSeven = x => x + 7;
 * const timesNegativeOne = x => x * -1;
 * 
 * pipe(addOne, addSeven, timesNegativeOne, Math.abs)(25);
 * //=> 33
 * @docgen_types
 * type AnyFunction<TArgs = unknown, TReturn = unknown> = (args?: TArgs) => TReturn;
 * @docgen_import { pipe, AnyFunction }
 * @docgen_import_note
 * <code>AnyFunction</code> is a TypeScript type that can be imported only in TypeScript projects.
 */
export const pipe = <T = unknown, TReturn = unknown>(...funcs: AnyFunction[]) => (value?: T) : TReturn | T =>
  isNotEmpty(funcs) 
  ? funcs.reduce((result, func) => func(result), value) as TReturn
  : value;