import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchRefreshViewport(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback((): void => dispatch({
    type: EAction.REFRESH_VIEWPORT
  }), [dispatch]);
}
