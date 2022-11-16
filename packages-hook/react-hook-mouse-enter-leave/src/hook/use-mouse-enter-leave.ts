import {
  useRef,
  useCallback
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

interface IFnEventHandler {
  (): void; // 延时后就不可能有 event 参数了，这是又 React 的 SyntheticEvent 机制决定的
}

/**
 * 对鼠标进出事件进行延时响应，避免频闪问题
 */
export default function useMouseEnterLeave(mouseEnter: IFnEventHandler, mouseLeave: IFnEventHandler, delayIn = 160, delayOut = delayIn): [IFnEventHandler, IFnEventHandler] {
  const isUnmounted = useIsUnmounted();
  const refIn = useRef<boolean>(false);
  const refTimer = useRef<number | null>(null);
  
  const mouseEnterWithDelay = useCallback(() => {
    if (refTimer.current) {
      window.clearTimeout(refTimer.current);
    }
    
    refTimer.current = window.setTimeout(() => {
      if (isUnmounted()) {
        return;
      }
      
      refTimer.current = null;
      
      if (refIn.current) {
        return;
      }
      
      refIn.current = true;
      mouseEnter();
    }, delayIn);
  }, [isUnmounted, refIn, refTimer, mouseEnter, delayIn]);
  const mouseLeaveWithDelay = useCallback(() => {
    if (refTimer.current) {
      window.clearTimeout(refTimer.current);
    }
    
    refTimer.current = window.setTimeout(() => {
      if (isUnmounted()) {
        return;
      }
      
      refTimer.current = null;
      
      if (!refIn.current) {
        return;
      }
      
      refIn.current = false;
      mouseLeave();
    }, delayOut);
  }, [isUnmounted, refIn, refTimer, mouseLeave, delayOut]);
  
  return [mouseEnterWithDelay, mouseLeaveWithDelay];
}