import {
  IDialogStackItem
} from '../types';

import useModelProps from './_use-model-props';
import useRefDialog from './use-ref-dialog';
import useRefContent from './use-ref-content';
import useDispatchSetZIndex from './use-dispatch-set-z-index';
import useDispatchCloseOnEsc from './use-dispatch-close-on-ecs';
import useDispatchCloseOnExternal from './use-dispatch-close-on-external';

export default function useDialogStackItem(): IDialogStackItem {
  const refDialog = useRefDialog();
  const refContent = useRefContent();
  const {
    backdrop,
    zIndex,
    zIndexBackdrop
  } = useModelProps();
  const dispatchSetZIndex = useDispatchSetZIndex();
  const dispatchCloseOnEsc = useDispatchCloseOnEsc();
  const dispatchCloseOnExternal = useDispatchCloseOnExternal();
  
  return {
    // @ts-ignore
    backdrop,
    // @ts-ignore
    zIndex,
    // @ts-ignore
    zIndexBackdrop,
    domDialog: refDialog.current,
    domDialogContent: refContent.current,
    dispatchSetZIndex,
    dispatchCloseOnEsc,
    dispatchCloseOnExternal
  };
}
