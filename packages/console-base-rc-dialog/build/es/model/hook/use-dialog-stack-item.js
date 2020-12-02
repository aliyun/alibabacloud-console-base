import useModelProps from './_use-model-props';
import useRefDialog from './use-ref-dialog';
import useRefContent from './use-ref-content';
import useDispatchSetZIndex from './use-dispatch-set-z-index';
import useDispatchCloseOnEsc from './use-dispatch-close-on-ecs';
import useDispatchCloseOnExternal from './use-dispatch-close-on-external';
export default function useDialogStackItem() {
  var refDialog = useRefDialog();
  var refContent = useRefContent();

  var _useModelProps = useModelProps(),
      backdrop = _useModelProps.backdrop,
      zIndex = _useModelProps.zIndex,
      zIndexBackdrop = _useModelProps.zIndexBackdrop;

  var dispatchSetZIndex = useDispatchSetZIndex();
  var dispatchCloseOnEsc = useDispatchCloseOnEsc();
  var dispatchCloseOnExternal = useDispatchCloseOnExternal();
  return {
    backdrop: backdrop,
    zIndex: zIndex,
    zIndexBackdrop: zIndexBackdrop,
    domDialog: refDialog.current,
    domDialogContent: refContent.current,
    dispatchSetZIndex: dispatchSetZIndex,
    dispatchCloseOnEsc: dispatchCloseOnEsc,
    dispatchCloseOnExternal: dispatchCloseOnExternal
  };
}