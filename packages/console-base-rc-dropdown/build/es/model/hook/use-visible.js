import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
/**
 * 由 props 和 state 决定是否下拉可见
 */

export default function useVisible() {
  var _useModelProps = useModelProps(),
      visible = _useModelProps.visible;

  var _useModelState = useModelState(),
      visibleInState = _useModelState.visible;

  return visible !== null && visible !== void 0 ? visible : visibleInState;
}