import {
  TParent,
  TSelector
} from '../types';

import find from './find';
import inViewport from './in-viewport';

interface IOptions extends ScrollIntoViewOptions {
  parent?: TParent;
}

/**
 * 基本都支持
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */
export default function scrollIntoView(selector: TSelector, {
  parent,
  behavior = 'smooth', // default 'auto'
  ...options
}: IOptions = {}): void {
  const [el] = find(selector, parent);
  
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!el || inViewport(el)) {
    return;
  }
  
  try {
    el.scrollIntoView({
      behavior,
      ...options
    });
  } catch (err) {
    // ignore
  }
}
