import {
  useCallback
} from 'react';

import {
  actionRndResizeStart
} from '../action';

import useModelDispatch from './_use-model-dispatch';

/**
 * 缩放开始
 */
export default function useDispatchRndResizeStart(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionRndResizeStart()), [dispatch]);
}
