import { keyPressed } from '../keyPressed';

/**
 * Verifies that the Delete key was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @returns {boolean}
 * @example
 * deleteKeyPressed(event);
 */
export const deleteKeyPressed = (event: KeyboardEvent) : boolean => keyPressed(event, 'Delete', 'delete', 'Del', 'del', 45);