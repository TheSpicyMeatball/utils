import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Alt key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * altKeyPressed(event);
 */
export const altKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Alt', 'alt', 18);