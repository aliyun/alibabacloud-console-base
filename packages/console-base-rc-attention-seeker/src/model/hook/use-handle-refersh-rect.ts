import {
  useCallback
} from 'react';

import {
  DEFAULT_RECT
} from '../const';

import useAttentionSeeker from './use-attention-seeker';
import useDispatchSetRect from './use-dispatch-set-rect';

export default function useHandleRefreshRect(): () => void {
  const attentionSeeker = useAttentionSeeker();
  const dispatchSetRect = useDispatchSetRect();
  
  return useCallback(() => {
    const el = attentionSeeker?.element;
    
    if (el) {
      const {
        top,
        left,
        width,
        height
      } = el.getBoundingClientRect();
      
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
