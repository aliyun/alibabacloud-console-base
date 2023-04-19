import {
  useCallback
} from 'react';

import {
  scrollTo
} from '@alicloud/mere-dom';

import useModelProps from './_use-model-props';
import useDispatchSetVisibleTop from './use-dispatch-set-visible-top';
import useDispatchSetVisibleBottom from './use-dispatch-set-visible-bottom';

export default function useHandleGotoBottom(): () => void {
  const {
    container,
    onGotoBottom
  } = useModelProps();
  const dispatchSetVisibleTop = useDispatchSetVisibleTop();
  const dispatchSetVisibleBottom = useDispatchSetVisibleBottom();
  
  return useCallback(() => {
    dispatchSetVisibleTop(true);
    dispatchSetVisibleBottom(false);
    
    scrollTo(container, {
      top: container.scrollHeight - container.clientHeight
    });
    
    onGotoBottom?.();
  }, [container, onGotoBottom, dispatchSetVisibleBottom, dispatchSetVisibleTop]);
}
