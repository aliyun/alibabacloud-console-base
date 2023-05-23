import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateData<D extends object = Record<string, unknown>>(): (payload: Partial<D>) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: Partial<D>) => dispatch({
    type: EAction.UPDATE_DATA,
    payload
  }), [dispatch]);
}
