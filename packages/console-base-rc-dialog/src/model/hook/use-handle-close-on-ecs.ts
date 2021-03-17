import {
  useCallback
} from 'react';

import detectFusionOverlay from '../../util/detect-fusion-overlay';

import useProps from './use-props';
import useHandleClose from './use-handle-close';

/**
 * 处理 ESC 事件
 *
 * 注意会经常变，引用用到了 dispatchCloseWithValue
 */
export default function useHandleCloseOnEsc(): () => void {
  const {
    esc,
    closable
  } = useProps();
  
  const dispatchClose = useHandleClose();
  
  return useCallback((): boolean | void => {
    if (detectFusionOverlay()) {
      return false;
    }
    
    // ESC 的时候优先关闭 fusion 的 overlay，如果有 fusion 的，则这边先不关
    if ((esc === -1 || (closable && esc))) {
      dispatchClose();
    }
  }, [esc, closable, dispatchClose]);
}
