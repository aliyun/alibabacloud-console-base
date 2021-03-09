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
  useAttentionSeeker
} from '../../hook';

/**
 * 高亮展示引导块（其实就是把它的 z-index 设置成比 mask 的高）
 */
export default function ModifyElementClass(): null {
  const element = useAttentionSeeker()?.element;
  
  useEffect(() => {
    if (element) {
      scrollIntoView(element);
      addClass(element, CLASS_THE_ELEMENT);
      
      return () => removeClass(element, CLASS_THE_ELEMENT);
    }
  }, [element]);
  
  return null;
}
