import {
  TSelector,
  TParent
} from '../types';

import find from './find';

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
  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const viewportW = window.innerWidth || document.documentElement.clientWidth;

  return top >= 0 && left >= 0 && bottom <= viewportH && right <= viewportW;
}
