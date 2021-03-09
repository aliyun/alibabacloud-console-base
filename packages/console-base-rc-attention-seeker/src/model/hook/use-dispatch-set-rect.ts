import {
  useCallback
} from 'react';

import {
  IRect
} from '../types';
import {
  actionSetRect
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetRect(): (payload: IRect) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IRect): void => dispatch(actionSetRect(payload)), [dispatch]);
}
