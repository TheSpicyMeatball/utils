import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Insert key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * insertKeyPressed(event);
 */
export const insertKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Insert', 'insert', 45);