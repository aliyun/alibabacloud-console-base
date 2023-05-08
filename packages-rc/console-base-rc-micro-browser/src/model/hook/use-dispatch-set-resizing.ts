import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  TDraggingResizing
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetResizing(): (payload: TDraggingResizing) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: TDraggingResizing) => dispatch({
    type: EAction.SET_RESIZING,
    payload
  }), [dispatch]);
}
