import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDropVisible(): boolean {
  const {
    disabled,
    visible
  } = useModelProps();
  const {
    visible: visibleInState
  } = useModelState();
  
  if (disabled) {
    return false;
  }
  
  return visible ?? visibleInState;
}
