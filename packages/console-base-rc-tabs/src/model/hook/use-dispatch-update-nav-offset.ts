import {
  useCallback
} from 'react';

import {
  actionUpdateNavOffset
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateNavOffset(): (offset: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((offset: number): void => dispatch(actionUpdateNavOffset(offset)), [dispatch]);
}
