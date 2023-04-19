import {
  useCallback
} from 'react';

import {
  scrollTo
} from '@alicloud/mere-dom';

import useModelProps from './_use-model-props';
import useDispatchSetVisibleTop from './use-dispatch-set-visible-top';
import useDispatchSetVisibleBottom from './use-dispatch-set-visible-bottom';

export default function useHandleGotoTop(): () => void {
  const {
    container,
    onGotoTop
  } = useModelProps();
  const dispatchSetVisibleTop = useDispatchSetVisibleTop();
  const dispatchSetVisibleBottom = useDispatchSetVisibleBottom();
  
  return useCallback(() => {
    dispatchSetVisibleTop(false);
    dispatchSetVisibleBottom(true);
    
    scrollTo(container, {
      top: 0
    });
    
    onGotoTop?.();
  }, [container, onGotoTop, dispatchSetVisibleBottom, dispatchSetVisibleTop]);
}
