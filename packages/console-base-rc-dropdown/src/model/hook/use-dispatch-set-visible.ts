import {
  useCallback
} from 'react';

import {
  actionSetVisible
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetVisible(): (payload: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: boolean): void => dispatch(actionSetVisible(payload)), [dispatch]);
}
