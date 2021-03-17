import {
  useMemo
} from 'react';

import {
  TDialogData
} from '../../types';
import {
  IContextForContent
} from '../types';

import useModelState from './_use-model-state';
import useDispatchLock from './use-dispatch-lock';
import useDispatchUnlock from './use-dispatch-unlock';
import useHandleFocus from './use-handle-focus';
import useHandleResetScrollTop from './use-handle-reset-scroll-top';
import useHandleCloseWithValue from './use-handle-close-with-value';
import useDispatchUpdateProps from './use-dispatch-update-props';
import useDispatchForceUpdate from './use-dispatch-force-update';
import useDispatchUpdateData from './use-dispatch-update-data';

/**
 * 给 content 使用的 hook
 */
export default function useDialog<T = void, D = TDialogData>(): IContextForContent<T, D> {
  const {
    data
  } = useModelState<T, D>();
  const focus = useHandleFocus();
  const lock = useDispatchLock();
  const unlock = useDispatchUnlock();
  const resetScrollTop = useHandleResetScrollTop();
  const close = useHandleCloseWithValue<T>();
  const updateData = useDispatchUpdateData<D>();
  const update = useDispatchUpdateProps<T, D>();
  const forceUpdate = useDispatchForceUpdate();
  
  return useMemo<IContextForContent<T, D>>((): IContextForContent<T, D> => ({
    data,
    focus,
    resetScrollTop,
    lock,
    unlock,
    update,
    updateData,
    forceUpdate,
    close
  }), [
    data,
    focus,
    resetScrollTop,
    lock,
    unlock,
    update,
    updateData,
    forceUpdate,
    close
  ]);
}
