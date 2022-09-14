import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IPayloadResize
} from '../types';

import useModelDispatch from './_use-model-dispatch';

/**
 * 缩放中和缩放结束
 */
export default function useDispatchRndResize(): (payload: IPayloadResize) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPayloadResize) => dispatch({
    type: EAction.RND_RESIZE,
    payload
  }), [dispatch]);
}
