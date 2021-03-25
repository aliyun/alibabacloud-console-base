import {
  IModelStateDropPosition
} from '../types';

import useModelState from './_use-model-state';

export default function useDropPosition(): IModelStateDropPosition {
  return useModelState().dropPosition;
}
