import getRect from './get-rect';
import getViewport from './get-viewport';

/**
 * if element is visible in the current viewport
 */
export default function inViewport(el: Element): boolean {
  const {
    top,
    left,
    bottom,
    right
  } = getRect(el);
  const {
    height,
    width
  } = getViewport();
  
  return top >= 0 && left >= 0 && bottom <= height && right <= width;
}
