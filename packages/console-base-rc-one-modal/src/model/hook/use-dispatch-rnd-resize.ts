import {
  useCallback
} from 'react';

import {
  IPayloadResize
} from '../types';
import {
  actionRndResize
} from '../action';

import useModelDispatch from './_use-model-dispatch';

/**
 * 缩放中和缩放结束
 */
export default function useDispatchRndResize(): (payload: IPayloadResize) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPayloadResize) => dispatch(actionRndResize(payload)), [dispatch]);
}
