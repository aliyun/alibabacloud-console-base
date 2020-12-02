import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
export default function useDialogZIndex() {
  var _useModelProps = useModelProps(),
      zIndex = _useModelProps.zIndex;

  var _useModelState = useModelState(),
      zIndexInState = _useModelState.zIndex;

  if (zIndexInState > 0) {
    return zIndexInState;
  }

  return zIndex;
}