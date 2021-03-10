import {
  useCallback
} from 'react';

import {
  getFixedRect
} from '@alicloud/mere-dom';

import {
  DEFAULT_RECT
} from '../const';

import useAttentionSeeker from './use-attention-seeker';
import useDispatchSetRect from './use-dispatch-set-rect';

export default function useHandleRefreshRect(): () => void {
  const attentionSeeker = useAttentionSeeker();
  const dispatchSetRect = useDispatchSetRect();
  
  return useCallback(() => {
    const rect = attentionSeeker?.element ? getFixedRect(attentionSeeker.element) : null;
    
    if (rect) {
      const {
        top,
        left,
        width,
        height
      } = rect;
      
      dispatchSetRect({
        top,
        left,
        width,
        height
      });
    } else {
      dispatchSetRect(DEFAULT_RECT);
    }
  }, [attentionSeeker, dispatchSetRect]);
}
