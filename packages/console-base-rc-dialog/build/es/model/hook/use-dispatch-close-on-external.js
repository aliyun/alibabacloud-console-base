import { useCallback } from 'react';
import useModelProps from './_use-model-props';
import useDispatchClose from './use-dispatch-close';
/**
 * 处理外部点击关闭
 */

export default function useDispatchCloseOnExternal() {
  var _useModelProps = useModelProps(),
      externalClose = _useModelProps.externalClose,
      closable = _useModelProps.closable;

  var dispatchClose = useDispatchClose();
  return useCallback(function () {
    if (externalClose === -1 || closable && externalClose) {
      dispatchClose();
    }
  }, [externalClose, closable, dispatchClose]);
}