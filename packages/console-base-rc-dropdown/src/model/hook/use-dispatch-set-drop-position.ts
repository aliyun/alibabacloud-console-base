import {
  useCallback
} from 'react';

import {
  IModelStateDropPosition
} from '../types';
import {
  actionSetDropPosition
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetDropPosition(): (payload: IModelStateDropPosition) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IModelStateDropPosition): void => dispatch(actionSetDropPosition(payload)), [dispatch]);
}
