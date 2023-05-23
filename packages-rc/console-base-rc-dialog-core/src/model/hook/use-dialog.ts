import {
  useMemo
} from 'react';

import {
  IContextForContent
} from '../types';

import useModelState from './_use-model-state';
import useDispatchLock from './use-dispatch-lock';
import useDispatchUnlock from './use-dispatch-unlock';
import useDispatchUpdateProps from './use-dispatch-update-props';
import useDispatchForceUpdate from './use-dispatch-force-update';
import useDispatchUpdateData from './use-dispatch-update-data';
import useHandleFocus from './use-handle-focus';
import useHandleResetScrollTop from './use-handle-reset-scroll-top';
import useHandleCloseWithValue from './use-handle-close-with-value';

/**
 * 给 content 使用的 hook，为了 content 可以和 Dialog 本体进行深度交流
 */
export default function useDialog<T = void, D extends object = Record<string, unknown>>(): IContextForContent<T, D> {
  const {
    data
  } = useModelState<T, D>();
  const lock = useDispatchLock();
  const unlock = useDispatchUnlock();
  const updateData = useDispatchUpdateData<D>();
  const update = useDispatchUpdateProps<T, D>();
  const forceUpdate = useDispatchForceUpdate();
  const focus = useHandleFocus();
  const resetScrollTop = useHandleResetScrollTop();
  const close = useHandleCloseWithValue<T>();
  
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
