import {
  useCallback
} from 'react';

import {
  actionUpdateNavOffsetMax
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateNavOffsetMax(): (offsetMax: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((offsetMax: number): void => dispatch(actionUpdateNavOffsetMax(offsetMax)), [dispatch]);
}
