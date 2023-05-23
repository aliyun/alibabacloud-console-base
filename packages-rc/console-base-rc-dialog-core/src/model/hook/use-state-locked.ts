import {
  EDialogLockState
} from '../enum';

import useModelState from './_use-model-state';

export default function useStateLocked(): EDialogLockState {
  return useModelState().locked;
}
