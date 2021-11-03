import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Tab key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * tabKeyPressed(event);
 */
export const tabKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Tab', 'tab', 9);