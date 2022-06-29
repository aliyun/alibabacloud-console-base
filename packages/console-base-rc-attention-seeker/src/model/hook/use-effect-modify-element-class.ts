import {
  useEffect
} from 'react';

import {
  addClass,
  removeClass,
  scrollIntoView
} from '@alicloud/mere-dom';

import {
  CLASS_THE_ELEMENT,
  CLASS_PARENT_RESET
} from '../../const';

import useAttentionElement from './use-attention-element';

function findParentsWithZ(el: HTMLElement): HTMLElement[] {
  const arr: HTMLElement[] = [];
  let p = el.parentElement;
  
  while (p && p.tagName !== 'BODY') {
    try {
      if (window.getComputedStyle(p).zIndex !== 'auto') { // 只要不是 auto 都会锁住子元素的 z-index
        arr.push(p);
      }
    } catch (err) {
      // ignore
    }
    
    p = p.parentElement;
  }
  
  return arr;
}

/**
 * 高亮展示引导块（其实就是把它的 z-index 设置成比 mask 的高）
 */
export default function useEffectModifyElementClass(): void {
  const attentionElement = useAttentionElement();
  
  useEffect(() => {
    if (attentionElement) {
      const parentsToReset = findParentsWithZ(attentionElement);
      
      parentsToReset.forEach(v => addClass(v, CLASS_PARENT_RESET));
      
      scrollIntoView(attentionElement);
      addClass(attentionElement, CLASS_THE_ELEMENT);
      
      return () => {
        removeClass(attentionElement, CLASS_THE_ELEMENT);
        parentsToReset.forEach(v => removeClass(v, CLASS_PARENT_RESET));
      };
    }
  }, [attentionElement]);
}
