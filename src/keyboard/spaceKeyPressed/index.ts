import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Space key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * spaceKeyPressed(event);
 */
export const spaceKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Space', 'space', ' ', 32);