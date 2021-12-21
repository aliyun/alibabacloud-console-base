import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchForceUpdate(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch({
    type: EAction.FORCE_UPDATE
  }), [dispatch]);
}
