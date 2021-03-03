import {
  useCallback
} from 'react';

import {
  TDialogData
} from '../../types';
import {
  actionUpdateData
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateData<D = TDialogData>(): (data: Partial<D>) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((data: Partial<D>) => dispatch(actionUpdateData<D>(data)), [dispatch]);
}
