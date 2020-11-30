import {
  useCallback
} from 'react';

import {
  actionToggleVisible
} from '../action';

import useModelProps from './_use-model-props';
import useModelDispatch from './_use-model-dispatch';

export default function useDispatchToggleVisible(): (visible?: boolean) => void {
  const {
    onVisibleChange
  } = useModelProps();
  const dispatch = useModelDispatch();
  
  return useCallback((visible = true): void => {
    dispatch(actionToggleVisible(visible));
    
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }, [dispatch, onVisibleChange]);
}
