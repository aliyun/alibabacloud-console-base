import {
  useCallback
} from 'react';

import {
  DEFAULT_ATTENTION_RECT
} from '../const';
import {
  getElementRectStyle
} from '../util';

import useAttentionElement from './use-attention-element';
import useDispatchSetAttentionRect from './use-dispatch-set-attention-rect';

export default function useHandleRefreshAttentionRect(): () => void {
  const attentionElement = useAttentionElement();
  const dispatchSetAttentionRect = useDispatchSetAttentionRect();
  
  return useCallback(() => {
    dispatchSetAttentionRect(attentionElement ? getElementRectStyle(attentionElement) : DEFAULT_ATTENTION_RECT);
  }, [attentionElement, dispatchSetAttentionRect]);
}
