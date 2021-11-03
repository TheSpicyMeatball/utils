import { keyPressed } from '../keyPressed';

/**
 * Verifies that the down arrow key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * downKeyPressed(event);
 */
export const downKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'ArrowDown', 40);