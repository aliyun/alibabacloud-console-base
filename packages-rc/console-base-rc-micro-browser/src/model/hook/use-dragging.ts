import {
  TDraggingResizing
} from '../types';

import useModelState from './_use-model-state';

export default function useDragging(): TDraggingResizing {
  return useModelState().dragging;
}
