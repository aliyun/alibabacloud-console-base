import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

/**
 * 缩放开始
 */
export default function useDispatchRndResizeStart(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch({
    type: EAction.RND_RESIZE_START
  }), [dispatch]);
}
