import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IAttentionRect
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetAttentionRect(): (payload: IAttentionRect) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IAttentionRect): void => dispatch({
    type: EAction.SET_ATTENTION_RECT,
    payload
  }), [dispatch]);
}
