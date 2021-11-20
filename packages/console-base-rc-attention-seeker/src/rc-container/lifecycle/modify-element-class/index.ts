import {
  useEffect
} from 'react';

import {
  addClass,
  removeClass,
  scrollIntoView
} from '@alicloud/mere-dom';

import {
  CLASS_THE_ELEMENT
} from '../../../const';
import {
  useAttentionElement
} from '../../../model';

/**
 * 高亮展示引导块（其实就是把它的 z-index 设置成比 mask 的高）
 */
export default function ModifyElementClass(): null {
  const attentionElement = useAttentionElement();
  
  useEffect(() => {
    if (attentionElement) {
      scrollIntoView(attentionElement);
      addClass(attentionElement, CLASS_THE_ELEMENT);
      
      return () => removeClass(attentionElement, CLASS_THE_ELEMENT);
    }
  }, [attentionElement]);
  
  return null;
}
