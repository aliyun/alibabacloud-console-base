import {
  useMemo
} from 'react';

import {
  EDialogSize
} from '../enum';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogSize(): number | EDialogSize {
  const {
    size
  } = useModelProps();
  const {
    data
  } = useModelState();
  
  return useMemo((): number | EDialogSize => (typeof size === 'function' ? size(data) : size) as number | EDialogSize, [data, size]);
}
