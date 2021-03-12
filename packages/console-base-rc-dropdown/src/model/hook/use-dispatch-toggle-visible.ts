import {
  useCallback
} from 'react';

import {
  actionToggleVisible
} from '../action';

import useModelDispatch from './_use-model-dispatch';
import useProps from './use-props';

export default function useDispatchToggleVisible(): (visible?: boolean) => void {
  const {
    onVisibleChange
  } = useProps();
  const dispatch = useModelDispatch();
  
  return useCallback((visible = true): void => {
    dispatch(actionToggleVisible(visible));
    
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }, [dispatch, onVisibleChange]);
}
