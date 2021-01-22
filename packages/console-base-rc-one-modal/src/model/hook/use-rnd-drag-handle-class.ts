import {
  CLASS_J_RND_HANDLE
} from '../../const';

import useRndDraggingDisabled from './use-rnd-dragging-disabled';

/**
 * 拖拽点的 className
 */
export default function useRndDragHandleClass(): string {
  const draggingDisabled = useRndDraggingDisabled();
  
  return draggingDisabled ? '' : CLASS_J_RND_HANDLE;
}
