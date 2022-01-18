import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

/**
 * 拖拽结束
 */
export default function useDispatchRndDragStop(): (x: number, y: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((x: number, y: number) => dispatch({
    type: EAction.RND_DRAG_STOP,
    payload: {
      x,
      y
    }
  }), [dispatch]);
}
