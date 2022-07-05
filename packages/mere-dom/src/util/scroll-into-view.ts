import {
  IRect
} from '../types';

import inViewport from './in-viewport';
import getRect from './get-rect';

/**
 * 基本都支持
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */
export default async function scrollIntoView(el: Element, {
  behavior = 'smooth', // default is 'auto'
  ...options
}: ScrollIntoViewOptions = {}): Promise<void> {
  if (inViewport(el)) {
    return;
  }
  
  return new Promise(resolve => {
    let sameCount = 0;
    let lastRect: IRect | null = null;
    
    function check(): void {
      const rect = getRect(el);
      
      if (lastRect && lastRect.top === rect.top && lastRect.left === rect.left) {
        if (sameCount++ > 2) { // if it's more than two frames
          return resolve();
        }
      } else {
        sameCount = 0;
        lastRect = rect;
      }
      
      requestAnimationFrame(check);
    }
    
    try {
      el.scrollIntoView({
        behavior,
        ...options
      });
      
      requestAnimationFrame(check);
    } catch (err) {
      resolve();
    }
  });
}
