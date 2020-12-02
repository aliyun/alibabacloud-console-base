import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

/**
 * 由 props 和 state 决定是否下拉可见
 */
export default function useVisible(): boolean {
  const {
    visible
  } = useModelProps();
  const {
    visible: visibleInState
  } = useModelState();
  
  return visible ?? visibleInState;
}
