import {
  useCallback
} from 'react';

import {
  TDialogData
} from '../../types';
import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateData<D = TDialogData>(): (payload: Partial<D>) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: Partial<D>) => dispatch({
    type: EAction.UPDATE_DATA,
    payload
  }), [dispatch]);
}
