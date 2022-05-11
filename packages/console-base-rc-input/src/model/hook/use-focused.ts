import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useFocused(): boolean {
  const {
    focused
  } = useModelProps();
  const {
    focused: focusedInState
  } = useModelState();
  
  return focused ?? focusedInState;
}