import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetVisibleTop from './use-dispatch-set-visible-top';
import useDispatchSetVisibleBottom from './use-dispatch-set-visible-bottom';

const OFFSET_DISTANCE = 10; // 上下误差距离，此范围不展示

function getVisibleTopBottom(container: HTMLElement): [boolean, boolean] {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = container;
  
  return [scrollTop > OFFSET_DISTANCE, scrollHeight > clientHeight + scrollTop + OFFSET_DISTANCE];
}

/**
 * 根据 container 的状态设置按钮的显隐状态
 */
export default function useHandleReset(): () => void {
  const {
    container
  } = useModelProps();
  const dispatchSetVisibleTop = useDispatchSetVisibleTop();
  const dispatchSetVisibleBottom = useDispatchSetVisibleBottom();
  
  return useCallback((): void => {
    const [visibleTop, visibleBottom] = getVisibleTopBottom(container);
    
    dispatchSetVisibleTop(visibleTop);
    dispatchSetVisibleBottom(visibleBottom);
  }, [container, dispatchSetVisibleTop, dispatchSetVisibleBottom]);
}