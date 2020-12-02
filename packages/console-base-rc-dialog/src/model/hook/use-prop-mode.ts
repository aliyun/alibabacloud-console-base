import {
  EDialogMode
} from '../../const';

import useModelProps from './_use-model-props';

export default function usePropMode(): EDialogMode {
  const {
    mode
  } = useModelProps();
  
  return (mode as EDialogMode) || EDialogMode.NORMAL;
}
