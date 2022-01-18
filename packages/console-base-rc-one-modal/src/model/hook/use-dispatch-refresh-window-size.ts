import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

/**
 * 浏览器窗口大小变化
 */
export default function useDispatchRefreshWindowSize(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch({
    type: EAction.REFRESH_WINDOW_SIZE
  }), [dispatch]);
}
