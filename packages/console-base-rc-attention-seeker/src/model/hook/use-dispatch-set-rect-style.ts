import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';
import {
  IRectStyle
} from '../types';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetRectStyle(): (payload: IRectStyle) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IRectStyle): void => dispatch({
    type: EAction.SET_RECT_STYLE,
    payload
  }), [dispatch]);
}
