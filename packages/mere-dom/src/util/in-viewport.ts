import {
  TSelector,
  TParent
} from '../types';

import find from './find';
import getViewportHeight from './get-viewport-height';
import getViewportWidth from './get-viewport-width';

/**
 * if element is visible in the current viewport
 */
export default function inViewport(selector: TSelector, parent?: TParent): boolean {
  const [el] = find(selector, parent);
  
  if (!el) {
    return false;
  }
  
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  
  return top >= 0 && left >= 0 && bottom <= getViewportHeight() && right <= getViewportWidth();
}
