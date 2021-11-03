import { keyPressed } from '../keyPressed';

/**
 * Verifies that the left arrow key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * leftKeyPressed(event);
 */
export const leftKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'ArrowLeft', 37);