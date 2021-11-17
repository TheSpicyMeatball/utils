export type RangeBoundary = { bound: number, inclusive: boolean };

export type AnyFunction<TArgs = unknown, TReturn = unknown> = (args?: TArgs) => TReturn;

export type SearchOptions = {
  caseSensitive: boolean,
  keys: string[],
};