import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

/**
 * 拖拽开始
 */
export default function useDispatchRndDragStart(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch({
    type: EAction.RND_DRAG_START
  }), [dispatch]);
}
