import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchClose from './use-dispatch-close';

/**
 * 处理外部点击关闭
 */
export default function useDispatchCloseOnExternal(): () => void {
  const {
    externalClose,
    closable
  } = useModelProps();
  const dispatchClose = useDispatchClose();
  
  return useCallback(() => {
    if (externalClose === -1 || (closable && externalClose)) {
      dispatchClose();
    }
  }, [externalClose, closable, dispatchClose]);
}
