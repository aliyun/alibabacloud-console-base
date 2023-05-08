import {
  TDraggingResizing
} from '../types';

import useModelState from './_use-model-state';

export default function useResizing(): TDraggingResizing {
  return useModelState().resizing;
}
