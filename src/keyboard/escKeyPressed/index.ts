import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Escape key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * escKeyPressed(event);
 */
export const escKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Escape', 'Esc', 'escape', 'esc', 27);