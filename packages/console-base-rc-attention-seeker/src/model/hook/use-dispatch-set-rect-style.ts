import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IAttentionSeekerRect
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetRectStyle(): (payload: IAttentionSeekerRect) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IAttentionSeekerRect): void => dispatch({
    type: EAction.SET_RECT_STYLE,
    payload
  }), [dispatch]);
}
