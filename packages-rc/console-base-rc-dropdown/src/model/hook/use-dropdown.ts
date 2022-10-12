import {
  useMemo, useCallback
} from 'react';

import {
  IContextForContent
} from '../types';

import useModelProps from './_use-model-props';
import useDropVisible from './use-drop-visible';
import useDispatchSetVisible from './use-dispatch-set-visible';

/**
 * 给内容用的 hook
 */
export default function useDropdown(): IContextForContent {
  const {
    onVisibleChange
  } = useModelProps();
  const visible = useDropVisible();
  const dispatchToggleVisible = useDispatchSetVisible();
  const handleToggleVisible = useCallback((payload: boolean) => {
    dispatchToggleVisible(payload);
    onVisibleChange?.(payload);
  }, [onVisibleChange, dispatchToggleVisible]);
  const showDrop = useCallback(() => handleToggleVisible(true), [handleToggleVisible]);
  const hideDrop = useCallback(() => handleToggleVisible(false), [handleToggleVisible]);
  
  return useMemo((): IContextForContent => ({
    visible,
    showDrop,
    hideDrop
  }), [visible, showDrop, hideDrop]);
}
