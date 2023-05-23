import useModelState from './_use-model-state';
import useModelProps from './_use-model-props';

export default function useVisible(): boolean {
  const {
    visible
  } = useModelProps();
  const {
    visible: visibleInState
  } = useModelState();
  
  return visible ?? visibleInState;
}
