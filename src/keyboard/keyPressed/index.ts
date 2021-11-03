import { isNotNilOrEmpty } from '../../value/isNotNilOrEmpty';

/**
 * Verifies that at least one of the provided keys was pressed
 * 
 * @since v1.13.0
 * @category Keyboard
 * @param {KeyboardEvent} event The keyboard event
 * @param {...Array<string | number>} keys The keys to check for
 * @returns {boolean}
 * @example
 * // Check for Enter key press
 * keyPressed(event, 'Enter');
 * 
 * // Check for Enter or Tab key press
 * keyPressed(event, 'Enter', 'Tab');
 */
export const keyPressed = (event: KeyboardEvent, ...keys: Array<string | number>) : boolean => 
  isNotNilOrEmpty.all(event, keys)
  ? keys.includes(event.key) || keys.includes(event.code)
  : false;