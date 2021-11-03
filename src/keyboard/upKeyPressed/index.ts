import { keyPressed } from '../keyPressed';

/**
 * Verifies that the up arrow key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * upKeyPressed(event);
 */
export const upKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'ArrowUp', 38);