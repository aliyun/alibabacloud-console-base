import {
  useCallback
} from 'react';

import {
  actionRndDragStop
} from '../action';

import useModelDispatch from './_use-model-dispatch';

/**
 * 拖拽结束
 */
export default function useDispatchRndDragStop(): (x: number, y: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((x: number, y: number) => dispatch(actionRndDragStop(x, y)), [dispatch]);
}
