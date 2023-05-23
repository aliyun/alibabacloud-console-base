import {
  EDialogMode
} from '../enum';

import useModelProps from './_use-model-props';

export default function useDialogMode(): EDialogMode {
  return useModelProps().mode as EDialogMode;
}
