import {
  useCallback
} from 'react';

import {
  actionRndDragStart
} from '../action';

import useModelDispatch from './_use-model-dispatch';

/**
 * 拖拽开始
 */
export default function useDispatchRndDragStart(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionRndDragStart()), [dispatch]);
}
