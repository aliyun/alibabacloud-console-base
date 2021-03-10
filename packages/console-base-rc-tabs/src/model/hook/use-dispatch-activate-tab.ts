import {
  useCallback
} from 'react';

import {
  actionActivateTab
} from '../action';

import useModelDispatch from './_use-model-dispatch';
import useProps from './use-props';

export default function useDispatchActivateTab(): (key: string | number) => void {
  const {
    onChange
  } = useProps();
  const dispatch = useModelDispatch();
  
  return useCallback((key: string | number): void => {
    dispatch(actionActivateTab(key));
    
    if (onChange) {
      onChange(key);
    }
  }, [dispatch, onChange]);
}
