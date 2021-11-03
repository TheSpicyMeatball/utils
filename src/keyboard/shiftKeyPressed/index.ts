import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Shift key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * shiftKeyPressed(event);
 */
export const shiftKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Shift', 'shift', 16);