import {
  useMemo
} from 'react';

import {
  IDialogButtonProps,
  TDialogButton,
  TDialogData
} from '../../types';
import {
  processButtons
} from '../../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogButtons<T = void, D = TDialogData>(): IDialogButtonProps<T, D>[] {
  let {
    buttons
  } = useModelProps();
  const {
    data,
    locked
  } = useModelState();
  
  if (typeof buttons === 'function') {
    buttons = buttons(data);
  }
  
  return useMemo(() => processButtons(buttons as TDialogButton<T, D>[], locked), [buttons, locked]);
}
