import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
export default function useDialogTitle() {
  var _useModelProps = useModelProps(),
      title = _useModelProps.title;

  var _useModelState = useModelState(),
      data = _useModelState.data;

  return typeof title === 'function' ? title(data) : title;
}