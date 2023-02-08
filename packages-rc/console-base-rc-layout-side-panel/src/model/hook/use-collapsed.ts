import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useCollapsed(): boolean {
  const {
    collapsed: valueInProps
  } = useModelProps();
  const {
    collapsed: valueInState
  } = useModelState();
  
  return valueInProps ?? valueInState;
}