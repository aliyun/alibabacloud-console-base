import {
  IDialogStackItem
} from '../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDispatchSetZIndex from './use-dispatch-set-z-index';
import useHandleCloseOnEsc from './use-handle-close-on-ecs';
import useHandleCloseOnExternal from './use-handle-close-on-external';

export default function useDialogStackItem(): IDialogStackItem {
  const {
    backdrop,
    zIndex,
    zIndexBackdrop
  } = useModelProps();
  const {
    domDialog,
    domDialogContent
  } = useModelState();
  const dispatchSetZIndex = useDispatchSetZIndex();
  const dispatchCloseOnEsc = useHandleCloseOnEsc();
  const dispatchCloseOnExternal = useHandleCloseOnExternal();
  
  return {
    backdrop,
    zIndex,
    zIndexBackdrop,
    domDialog,
    domDialogContent,
    dispatchSetZIndex,
    dispatchCloseOnEsc,
    dispatchCloseOnExternal
  };
}