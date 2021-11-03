import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Backspace key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * backspaceKeyPressed(event);
 */
export const backspaceKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Backspace', 'backspace', 8);