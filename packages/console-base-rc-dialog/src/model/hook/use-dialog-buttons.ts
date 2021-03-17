import {
  useMemo
} from 'react';

import {
  IDialogButtonProps,
  TDialogButton,
  TDialogData
} from '../../types';
import processButtons from '../../util/process-buttons';

import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useDialogButtons<T = void, D = TDialogData>(): IDialogButtonProps<T, D>[] {
  let {
    buttons
  } = useProps();
  const {
    data,
    locked
  } = useModelState();
  
  if (typeof buttons === 'function') {
    buttons = buttons(data);
  }
  
  return useMemo(() => processButtons(buttons as TDialogButton<T, D>[], locked), [buttons, locked]);
}
