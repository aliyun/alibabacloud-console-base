import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useDialogZIndex(): number | undefined {
  const {
    zIndex
  } = useProps();
  const {
    zIndex: zIndexInState
  } = useModelState();
  
  if (zIndexInState > 0) {
    return zIndexInState;
  }
  
  return zIndex;
}
