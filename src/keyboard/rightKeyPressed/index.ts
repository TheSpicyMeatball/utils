import { keyPressed } from '../keyPressed';

/**
 * Verifies that the right arrow key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * rightKeyPressed(event);
 */
export const rightKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'ArrowRight', 39);