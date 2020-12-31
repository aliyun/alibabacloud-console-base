import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useVisible(): boolean {
  const {
    disabled,
    visible
  } = useProps();
  const {
    visible: visibleInState
  } = useModelState();
  
  if (disabled) {
    return false;
  }
  
  return visible ?? visibleInState;
}
