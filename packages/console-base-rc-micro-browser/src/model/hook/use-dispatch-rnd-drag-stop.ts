import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IPayloadDrag
} from '../types';

import useModelDispatch from './_use-model-dispatch';

/**
 * 拖拽结束
 */
export default function useDispatchRndDragStop(): (payload: IPayloadDrag) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPayloadDrag) => dispatch({
    type: EAction.RND_DRAG_STOP,
    payload
  }), [dispatch]);
}
