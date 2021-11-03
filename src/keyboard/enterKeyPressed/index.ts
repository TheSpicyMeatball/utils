import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Enter key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * enterKeyPressed(event);
 */
export const enterKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Enter', 'enter', 'NumpadEnter', 13);