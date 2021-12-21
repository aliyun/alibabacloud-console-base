import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchMounted(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch({
    type: EAction.DID_MOUNT
  }), [dispatch]);
}
