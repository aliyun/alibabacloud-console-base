import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useVisible(): boolean {
  const [{
    visible: visibleInProps,
    defaultVisible
  }] = useModelProps();
  const {
    visible: visibleInState
  } = useModelState();
  
  return visibleInProps ?? visibleInState ?? defaultVisible;
}