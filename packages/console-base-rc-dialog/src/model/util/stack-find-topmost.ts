import {
  IDialogStackItem
} from '../types';

import stackGet from './stack-get';

/**
 * 找到「最顶」的 dialog，这里的最顶不一定是 id 最大的，它是指 z-index 最大的当中 id 最大的那个
 */
export default function stackFindTopmost(): IDialogStackItem | undefined {
  const STACK = stackGet();
  let topmostZIndex = -1;
  let topmostNumId = -1;
  
  STACK.each((v, k) => {
    const {
      zIndex
    } = v;
    const num = Number(k);
    
    if (zIndex > topmostZIndex) {
      topmostZIndex = zIndex;
      topmostNumId = num;
    } else if (zIndex === topmostZIndex && num > topmostNumId) {
      topmostNumId = num;
    }
  });
  
  return STACK.get(topmostNumId);
}