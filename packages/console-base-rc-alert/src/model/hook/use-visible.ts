import useProps from './use-props';
import useModelState from './_use-model-state';

export default function useVisible(): boolean {
  const [{
    visible
  }] = useProps();
  const {
    visible: visibleInState
  } = useModelState();
  
  return visible ?? visibleInState;
}