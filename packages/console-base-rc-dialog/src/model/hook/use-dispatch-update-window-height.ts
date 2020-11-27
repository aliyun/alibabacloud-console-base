import {
  useCallback
} from 'react';

import {
  actionUpdateWindowHeight
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateWindowHeight(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionUpdateWindowHeight()), [dispatch]);
}
