import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';
import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetMode(): (payload: EModalMode) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: EModalMode) => dispatch({
    type: EAction.SET_MODE,
    payload
  }), [dispatch]);
}
