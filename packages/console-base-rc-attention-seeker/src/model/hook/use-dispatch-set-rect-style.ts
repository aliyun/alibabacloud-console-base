import {
  useCallback
} from 'react';

import {
  IRectStyle
} from '../types';
import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetRectStyle(): (payload: IRectStyle) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IRectStyle): void => dispatch({
    type: EAction.SET_RECT_STYLE,
    payload
  }), [dispatch]);
}
