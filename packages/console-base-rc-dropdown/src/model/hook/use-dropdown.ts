import {
  useMemo, useCallback
} from 'react';

import {
  IContextForContent
} from '../types';

import useVisible from './use-visible';
import useDispatchSetVisible from './use-dispatch-set-visible';

/**
 * 给内容用的 hook
 */
export default function useDropdown(): IContextForContent {
  const visible = useVisible();
  const dispatchToggleVisible = useDispatchSetVisible();
  const showDrop = useCallback(() => dispatchToggleVisible(true), [dispatchToggleVisible]);
  const hideDrop = useCallback(() => dispatchToggleVisible(false), [dispatchToggleVisible]);
  
  return useMemo(():IContextForContent => ({
    visible,
    showDrop,
    hideDrop
  }), [visible, showDrop, hideDrop]);
}
