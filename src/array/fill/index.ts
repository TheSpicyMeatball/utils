/**
 * Creates a new array of the specified size and fills each index with the item
 * 
 * @since v0.0.1
 * @category Array
 * @template {T} - The type of the array
 * @param {number} size - The size of the new array
 * @param {T} [item] - The item to put in each index of the array
 * @returns {T[]}
 * @example
 * fill(5, 1) //=> [1, 1, 1, 1, 1]
 * fill(5) //=> [undefined, undefined, undefined, undefined, undefined]
 */
export const fill = <T = unknown>(size: number, item?: T) : T[] => size >= 0 ? (new Array(size)).fill(item) : [];