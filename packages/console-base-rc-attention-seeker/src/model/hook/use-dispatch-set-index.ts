import {
  useCallback
} from 'react';

import {
  actionSetIndex
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetIndex(): (payload: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number): void => dispatch(actionSetIndex(payload)), [dispatch]);
}
