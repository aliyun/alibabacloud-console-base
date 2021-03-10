import {
  useCallback
} from 'react';

import {
  actionActivateTab
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchActivateTab(): (key: string | number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((key: string | number): void => dispatch(actionActivateTab(key)), [dispatch]);
}
