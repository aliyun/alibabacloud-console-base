import {
  TParent,
  TSelector
} from '../types';

import find from './find';
import inViewport from './in-viewport';

/**
 * 基本都支持
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */
export default function scrollIntoView(selector: TSelector, parent?: TParent): void {
  const [el] = find(selector, parent);
  
  if (!el || inViewport(el)) {
    return;
  }
  
  try {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  } catch (err) {
    // ignore
  }
}
