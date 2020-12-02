import { useMemo } from 'react';
import processButtons from '../../util/process-buttons';
import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
export default function useDialogButtons() {
  var _useModelProps = useModelProps(),
      buttons = _useModelProps.buttons;

  var _useModelState = useModelState(),
      data = _useModelState.data,
      locked = _useModelState.locked;

  if (typeof buttons === 'function') {
    buttons = buttons(data);
  }

  return useMemo(function () {
    return processButtons(buttons, locked);
  }, [buttons, locked]);
}