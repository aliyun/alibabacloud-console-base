import {
  useEffect
} from 'react';

import {
  getComputedStyle,
  addClass,
  removeClass,
  scrollIntoView
} from '@alicloud/mere-dom';

import {
  CLASS_ATTENTION_SEEKER_ELEMENT,
  CLASS_ATTENTION_SEEKER_ELEMENT_INLINE
} from '../../const';

import useAttentionSeeker from './use-attention-seeker';
import useDispatchRefreshViewport from './use-dispatch-refresh-viewport';
import useHandleRefreshAttentionRect from './use-handle-refresh-attention-rect';

/**
 * 当 attention seeker 发生变化（包括新入和重新入）的时候，做以下事情：
 * 
 * 1. 刷新 viewport 信息
 * 2. 滚动到可视区域
 * 3. 滚动完成后，进行镂空高亮和动画提示
 */
export default function useEffectAttention(): void {
  const attentionSeeker = useAttentionSeeker(); // 监视 seeker 对象，这样可以保证重新触发的时候可以刷新高亮和动画
  const dispatchRefreshViewport = useDispatchRefreshViewport();
  const handleRefreshAttentionRect = useHandleRefreshAttentionRect();
  
  useEffect(() => {
    if (!attentionSeeker) {
      return;
    }
    
    const className = getComputedStyle(attentionSeeker.element).display === 'inline' ? CLASS_ATTENTION_SEEKER_ELEMENT_INLINE : CLASS_ATTENTION_SEEKER_ELEMENT;
    
    dispatchRefreshViewport();
    
    scrollIntoView(attentionSeeker.element, {
      block: 'center'
    }).then(() => {
      handleRefreshAttentionRect();
      addClass(attentionSeeker.element, className);
    });
    
    return () => removeClass(attentionSeeker.element, className);
  }, [attentionSeeker, dispatchRefreshViewport, handleRefreshAttentionRect]);
}
