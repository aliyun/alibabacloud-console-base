import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateNavOffsetMax(): (payload: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number): void => dispatch({
    type: EAction.UPDATE_NAV_OFFSET_MAX,
    payload
  }), [dispatch]);
}
