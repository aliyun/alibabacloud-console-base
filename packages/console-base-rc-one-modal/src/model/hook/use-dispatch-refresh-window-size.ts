import {
  useCallback
} from 'react';

import {
  actionRefreshWindowSize
} from '../action';

import useModelDispatch from './_use-model-dispatch';

/**
 * 浏览器窗口大小变化
 */
export default function useDispatchRefreshWindowSize(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionRefreshWindowSize()), [dispatch]);
}
