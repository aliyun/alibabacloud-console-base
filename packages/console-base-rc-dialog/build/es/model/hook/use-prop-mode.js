import { EDialogMode } from '../../const';
import useModelProps from './_use-model-props';
export default function usePropMode() {
  var _useModelProps = useModelProps(),
      mode = _useModelProps.mode;

  return mode || EDialogMode.NORMAL;
}