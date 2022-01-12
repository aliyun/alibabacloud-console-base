import {
  useEffect
} from 'react';

import useModelProps from './_use-model-props';
import useVisible from './use-visible';
import useDispatchSetAutoCloseTick from './use-dispatch-set-auto-close-tick';

/**
 * 当 visible 变成 true，且有 autoClose 的时候开始倒计时
 */
export default function useEffectAutoCloseStart(): void {
  const {
    autoClose
  } = useModelProps();
  const visible = useVisible();
  const dispatchSetAutoCloseTick = useDispatchSetAutoCloseTick();
  
  useEffect(() => {
    if (visible && autoClose) {
      dispatchSetAutoCloseTick(autoClose);
    }
  }, [visible, autoClose, dispatchSetAutoCloseTick]);
}