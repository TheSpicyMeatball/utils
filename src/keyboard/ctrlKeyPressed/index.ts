import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Ctrl key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * ctrlKeyPressed(event);
 */
export const ctrlKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Ctrl', 'ctrl', 17);