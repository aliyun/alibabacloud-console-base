import {
  useEffect
} from 'react';

import {
  scrollIntoView
} from '@alicloud/mere-dom';

import useAttentionElement from './use-attention-element';

/**
 * 将需要高亮的区域滚动到可视区域
 */
export default function useEffectScrollInToView(): void {
  const attentionElement = useAttentionElement();
  
  useEffect(() => {
    if (attentionElement) {
      scrollIntoView(attentionElement);
    }
  }, [attentionElement]);
}
