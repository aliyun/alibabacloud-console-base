import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogZIndex(): number | undefined {
  const {
    zIndex
  } = useModelProps();
  const {
    zIndex: zIndexInState
  } = useModelState();
  
  if (zIndexInState > 0) {
    return zIndexInState;
  }
  
  return zIndex;
}
