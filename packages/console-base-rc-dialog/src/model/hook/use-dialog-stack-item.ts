import {
  IDialogStackItem
} from '../types';

import useProps from './use-props';
import useRefDialog from './use-ref-dialog';
import useRefContent from './use-ref-content';
import useDispatchSetZIndex from './use-dispatch-set-z-index';
import useHandleCloseOnEsc from './use-handle-close-on-ecs';
import useHandleCloseOnExternal from './use-handle-close-on-external';

export default function useDialogStackItem(): IDialogStackItem {
  const refDialog = useRefDialog();
  const refContent = useRefContent();
  const {
    backdrop,
    zIndex,
    zIndexBackdrop
  } = useProps();
  const dispatchSetZIndex = useDispatchSetZIndex();
  const dispatchCloseOnEsc = useHandleCloseOnEsc();
  const dispatchCloseOnExternal = useHandleCloseOnExternal();
  
  return {
    backdrop,
    zIndex,
    zIndexBackdrop,
    domDialog: refDialog.current,
    domDialogContent: refContent.current,
    dispatchSetZIndex,
    dispatchCloseOnEsc,
    dispatchCloseOnExternal
  };
}
