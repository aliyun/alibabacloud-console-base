import {
  useCallback
} from 'react';

import {
  DEFAULT_RECT
} from '../const';
import {
  getElementRectStyle
} from '../util';

import useAttentionElement from './use-attention-element';
import useDispatchSetRectStyle from './use-dispatch-set-rect-style';

export default function useHandleRefreshRectStyle(): () => void {
  const attentionElement = useAttentionElement();
  const dispatchSetRect = useDispatchSetRectStyle();
  
  return useCallback(() => {
    const rectStyle = attentionElement ? getElementRectStyle(attentionElement) : DEFAULT_RECT;
    
    dispatchSetRect(rectStyle);
  }, [attentionElement, dispatchSetRect]);
}
