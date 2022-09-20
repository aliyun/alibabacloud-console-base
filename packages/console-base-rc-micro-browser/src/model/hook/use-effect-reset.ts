import {
  useEffect
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchReset from './use-dispatch-reset';

export default function useEffectReset(): void {
  const {
    visible
  } = useModelProps();
  const dispatchReset = useDispatchReset();
  
  useEffect(() => {
    if (visible) {
      return;
    }
    
    const timer = window.setTimeout(dispatchReset, 1000); // 延时，避免在关闭的时候触发不必要的动画
    
    return () => window.clearTimeout(timer);
  }, [visible, dispatchReset]);
}