import {
  useCallback
} from 'react';

import {
  actionSetZIndex
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetZIndex(): (zIndex: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((zIndex: number) => dispatch(actionSetZIndex(zIndex)), [dispatch]);
}
