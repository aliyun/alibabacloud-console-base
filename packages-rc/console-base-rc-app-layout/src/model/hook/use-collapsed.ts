import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useCollapsed(): boolean {
  const {
    asideNavProps
  } = useModelProps();
  const {
    collapsed: valueInState
  } = useModelState();
  
  return asideNavProps?.collapsed ?? valueInState;
}
